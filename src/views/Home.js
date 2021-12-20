import SalePanner from "../components/SalePanner";
import ProductBlock from "../components/ProductBlock";
const Home = () => {
    return (
        <>
            <SalePanner />
            <ProductBlock title="Sản phẩm mới nhất" url="http://localhost:54610/api/Product/GetAll" />
            <ProductBlock title="Giày thể thao" url="http://localhost:54610/api/Product/GetByType/Giày thể thao" />
            <ProductBlock title="Quần áo bóng đá" url="http://localhost:54610/api/Product/GetByType/Quần áo bóng đá" />
            <ProductBlock title="Túi thể thao" url="http://localhost:54610/api/Product/GetByType/Túi thể thao" />
        </>
    );
};

export default Home;