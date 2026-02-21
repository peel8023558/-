// 컨텐츠에 관한 데이터를 가져오는 함수 
async function getContents() {
    // 서버에 데이터를 요청한다. 
    const response = await fetch('https://api.test.com/movies');
    // 받은 데이터를 자바스크립트 객체로 변환
    const data = await response.json();

    const ValuableData = data.filter(m => m.rating >= 9.0);

    console.log(ValuableData);
};

const cartItems = [
  { id: "ITEM_01", name: "게이밍 마우스", price: 50000, stock: { count: 15, location: "A1" } },
  { id: "ITEM_02", name: "기계식 키보드", price: 120000, stock: { count: 3, location: "B2" } },
  { id: "ITEM_03", name: "C타입 케이블", price: 8000, stock: { count: 100, location: "A3" } },
  { id: "ITEM_04", name: "32인치 모니터", price: 350000, stock: { count: 5, location: "C1" } }
];

const vipReport = cartItems
.filter(({ price, stock }) => {
    return price >= 30000 && stock.count < 10;
})
.map(({ price, name }) => {
    finalPrice = price * 0.9;

    return {
        productName: `[HOT] ${name}`,
        finalPrice,
        shipping: finalPrice >= 100000 ? "무료배송" : "배송비 3,000원"
    };
});

function ShowItems(){
    // vipReport 데이터
    const displayItems = vipReport.map((item) => (
        <li key = {item.id} style={{border: '1px solid gray', margom: '10px'}}>
            <h4>{item.productName}</h4>
            <p>가격: {item.finalPrice}원 ({item.shipping}) </p>
        </li>
    ));
    return (
        <div>
            <h2> VIP 고객 특가 </h2>
            <ul>
                {displayItems}
            </ul>
        </div>
    );
}
