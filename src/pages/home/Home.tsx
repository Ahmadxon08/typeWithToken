import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="top_content">
        <div className="box">
          <h1>423 ta</h1>
          <span>Foydalanuvchi</span>
        </div>
        <div className="box">
          <h1>978 ta</h1>
          <span>Buyurtma</span>
        </div>
        <div className="box">
          <h1>342 ta</h1>
          <span>SMS jo'natildi</span>
        </div>
        <div className="box">
          <h1>4 xil</h1>
          <span>Xizmat</span>
        </div>
      </div>
      <div className="bottom_content">
        <div className="b_head">
          <span>Buyurmalar:</span>
          <select name="" id="">
            <option value=""> Oylik</option>
          </select>
        </div>
        <div className="b_footer">
          <div className="cardButom">
            <span>Barchasi</span>
            <p>423 ta</p>
          </div>
          <div className="cardButom">
            <span>Tayyor </span>
            <p>423 ta</p>
          </div>
          <div className="cardButom">
            <span>Tozalanmoqda </span>
            <p>423 ta</p>
          </div>
          <div className="cardButom">
            <span>Olib ketildi </span>
            <p>423 ta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
