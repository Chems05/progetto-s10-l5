import { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuliamo l'invio del form con un timeout
    setTimeout(() => {
      setFormSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000); // Simuliamo un ritardo di 1 secondo
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Aiutaci a Migliorare</h1>
      <form onSubmit={handleSubmit} className="feedback-form mt-4">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Inserisci il tuo nome"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Inserisci la tua email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Messaggio</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Scrivi il tuo messaggio"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
        {formSubmitted && (
          <p className="mex text-success mt-3 font-weight-bold">
            Grazie per il tuo feedback!
          </p>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
