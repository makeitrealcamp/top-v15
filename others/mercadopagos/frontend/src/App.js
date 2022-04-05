import axios from 'axios';
import './App.css';

function App() {
  async function handlePayment() {
    const mp = new window.MercadoPago(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
      locale: 'es-CO',
    });

    const preferences = {
      items: [
        {
          id: 0,
          title: 'árbol',
          description: 'Produce O2',
          picture_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2F%25C3%2581rbol&psig=AOvVaw2wmp-f5TMF1nS1TrvGMg00&ust=1649203440770000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCMiQ3dzP-_YCFQAAAAAdAAAAABAD',
          category_id: 'art',
          quantity: 10,
          currency: 'COP',
          unit_price: 10000,
        }
      ],
      back_urls: {
        success: 'http://localhost:3000/success',
        pending: 'http://localhost:3000/pending',
        failure: 'http://localhost:3000/failure',
      }
    };

    const { data: { preferenceId } } = await axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/payments/create-preference',
      data: preferences,
    })

    const checkout = mp.checkout({
      preference: { id: preferenceId },
      // render: {
      //   container: '.payment',
      //   label: 'Pagar'
      // }
    });

    checkout.open();
  }

  return (
    <div className="App">
      <div className="payment"></div>
      <button type="button" onClick={handlePayment}>Pagar</button>
    </div>
  );
}

export default App;
