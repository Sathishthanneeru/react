function Cards() {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center",padding:"20px"}} id="services">
      <div className="card" style={{width:"18rem",}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjV8T27lxwxlw19D7R9NnWcHrJQy0QmlxiQ&s" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://www.ideas.com.vn/wp-content/uploads/2019/07/blog8.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://vn4u.vn/wp-content/uploads/2023/09/bai-viet-quang-cao-ban-hang-hay.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://lh3.googleusercontent.com/Vftq_FZ9GE4tIIAgizmn89RMkxEtWGJvaQH--lxlzVXe5JFUnTxfdBlSKZOnx0RLZMtAeMVW8Kma_83i6Wohxp1cBIFG1-VQ9jCouo6nUTA=w622" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://suno.vn/blog/wp-content/uploads/2016/09/find-hot-products-to-sell-on-amazon.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://suno.vn/blog/wp-content/uploads/2016/09/find-hot-products-to-sell-on-amazon.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://suno.vn/blog/wp-content/uploads/2016/09/find-hot-products-to-sell-on-amazon.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
      <div className="card" style={{width:"18rem"}}>
        <img src="https://suno.vn/blog/wp-content/uploads/2016/09/find-hot-products-to-sell-on-amazon.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
export default Cards;


// function Cards() {
//   return (
//     <div className="grid-container" id="services">
//       {[ 
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjV8T27lxwxlw19D7R9NnWcHrJQy0QmlxiQ&s",
//         "https://www.ideas.com.vn/wp-content/uploads/2019/07/blog8.png",
//         "https://vn4u.vn/wp-content/uploads/2023/09/bai-viet-quang-cao-ban-hang-hay.jpg",
//         "https://lh3.googleusercontent.com/Vftq_FZ9GE4tIIAgizmn89RMkxEtWGJvaQH--lxlzVXe5JFUnTxfdBlSKZOnx0RLZMtAeMVW8Kma_83i6Wohxp1cBIFG1-VQ9jCouo6nUTA=w622",
//         "https://suno.vn/blog/wp-content/uploads/2016/09/find-hot-products-to-sell-on-amazon.png"
//       ].map((imgSrc, index) => (
//         <div className="card" key={index}>
//           <img src={imgSrc} className="card-img-top" alt="Product" />
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the bulk of the card's content.
//             </p>
//             <a href="#" className="btn btn-primary">ADD TO CART</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;