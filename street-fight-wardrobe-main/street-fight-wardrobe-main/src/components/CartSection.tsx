export const CartSection = () => {
  return (
    <section className="py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="section-header animate-street-glow mb-4 font-military">
            CARRELLO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Instructions */}
          <div className="auth-box mb-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground font-tactical">
                Completa il tuo ordine
              </h3>
              <p className="text-muted-foreground font-tactical">
                Inserisci i codici identificativi degli articoli che vuoi acquistare nel modulo qui sotto.
              </p>
            </div>
          </div>
          
          {/* Google Form Integration Area */}
          <div className="auth-box">
            <div className="bg-muted/30 border-2 border-dashed border-primary/50 rounded-lg p-8 text-center space-y-6">
              <div className="space-y-2">
                <div className="text-primary font-black text-2xl animate-street-glow font-military">
                  📋 MODULO ORDINI
                </div>
                <p className="text-sm text-muted-foreground font-tactical">
                  Sostituisci questo contenuto con l'embed del tuo modulo Google Form
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground font-tactical">Campi richiesti nel modulo:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 font-tactical">
                    <li>🏷️ Codice identificativo articolo</li>
                    <li>📦 Quantità</li>
                    <li>👤 Nome e cognome</li>
                    <li>📞 Informazioni di contatto</li>
                    <li>🏠 Indirizzo di spedizione</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground font-tactical">Come integrare:</h4>
                  <ol className="text-xs text-muted-foreground space-y-1 font-tactical">
                    <li>1. Crea il modulo su Google Forms</li>
                    <li>2. Clicca "Invia" → "Incorpora HTML"</li>
                    <li>3. Copia il codice iframe</li>
                    <li>4. Sostituisci questo div con l'iframe</li>
                  </ol>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground font-tactical">
                  💡 Dopo aver completato il modulo, riceverai conferma dell'ordine via email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};