import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MASTER_TOKEN = "REDFURY-24H"; // Temporary master token for access

export const AuthPage = ({ onTokenVerified }: { onTokenVerified: () => void }) => {
  const [step, setStep] = useState<'request' | 'verify'>('request');
  const [contact, setContact] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // MODIFICATO: invia la richiesta al backend per inviare email
  const handleRequestToken = async () => {
    if (!contact.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci email",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Chiamata al backend per inviare email
      const response = await fetch('http://localhost:3001/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: contact }),
      });
      const data = await response.json();

      if (data.success) {
        // Salva il token ricevuto per la verifica successiva
        localStorage.setItem(`auth_token_${contact}`, JSON.stringify({
          token: data.code,
          contact: contact,
          expiresAt: Date.now() + (24 * 60 * 60 * 1000),
          renewCount: 0,
          maxRenews: 4
        }));

        toast({
          title: "Email inviata",
          description: "Controlla la tua casella email per il codice.",
          duration: 10000
        });
        setStep('verify');
      } else {
        toast({
          title: "Errore",
          description: "Impossibile inviare email.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nella richiesta.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // NON MODIFICARE: verifica il token inserito
  const handleVerifyToken = () => {
    if (!token.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci il token",
        variant: "destructive"
      });
      return;
    }

    try {
      // Temporary master token bypass
      if (token.toUpperCase() === MASTER_TOKEN) {
        localStorage.setItem('auth_verified', 'true');
        localStorage.setItem('auth_contact', 'master');
        onTokenVerified();
        return;
      }
      const storedData = localStorage.getItem(`auth_token_${contact}`);
      if (!storedData) {
        toast({
          title: "Errore",
          description: "Token non trovato",
          variant: "destructive"
        });
        return;
      }

      const tokenData = JSON.parse(storedData);
      
      if (Date.now() > tokenData.expiresAt) {
        toast({
          title: "Token Scaduto",
          description: "Il token è scaduto. Richiedi un nuovo token.",
          variant: "destructive"
        });
        localStorage.removeItem(`auth_token_${contact}`);
        setStep('request');
        return;
      }

      if (tokenData.token === token.toUpperCase()) {
        localStorage.setItem('auth_verified', 'true');
        localStorage.setItem('auth_contact', contact);
        onTokenVerified();
      } else {
        toast({
          title: "Errore",
          description: "Token non valido",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nella verifica del token",
        variant: "destructive"
      });
    }
  };

  // NON MODIFICARE: rinnovo token locale
  const handleRenewToken = () => {
    try {
      const storedData = localStorage.getItem(`auth_token_${contact}`);
      if (!storedData) return;

      const tokenData = JSON.parse(storedData);
      
      if (tokenData.renewCount >= tokenData.maxRenews) {
        toast({
          title: "Limite Raggiunto",
          description: "Hai raggiunto il limite massimo di rinnovi (4 giorni)",
          variant: "destructive"
        });
        return;
      }

      const newToken = Math.random().toString(36).substring(2, 8).toUpperCase();
      const updatedTokenData = {
        ...tokenData,
        token: newToken,
        expiresAt: Date.now() + (24 * 60 * 60 * 1000),
        renewCount: tokenData.renewCount + 1
      };

      localStorage.setItem(`auth_token_${contact}`, JSON.stringify(updatedTokenData));
      
      toast({
        title: "Token Rinnovato",
        description: `Il tuo nuovo token è: ${newToken}`,
        duration: 10000
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nel rinnovo del token",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-dark)' }}>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="section-header animate-street-glow mb-8">CLOTHES COLLECTION</h1>
          <p className="text-muted-foreground">Accesso Esclusivo</p>
        </div>

        {step === 'request' ? (
          <div className="auth-box space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-center text-foreground">Richiedi Accesso</h2>
              <Input
                type="text"
                placeholder="Email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="neon-border"
              />
              <Button 
                onClick={handleRequestToken}
                disabled={loading}
                className="street-button w-full"
              >
                {loading ? 'INVIO...' : 'INVIA CODICE'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="auth-box space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-center text-foreground">Inserisci Token</h2>
              <Input
                type="text"
                placeholder="Inserisci il token ricevuto"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="neon-border"
              />
              <div className="space-y-3">
                <Button 
                  onClick={handleVerifyToken}
                  className="street-button w-full"
                >
                  ACCEDI
                </Button>
                <Button 
                  onClick={handleRenewToken}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  RINNOVA TOKEN
                </Button>
                <Button 
                  onClick={() => setStep('request')}
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  Torna Indietro
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};