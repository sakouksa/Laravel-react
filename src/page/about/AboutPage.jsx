import { Button, Space } from "antd";
import { countStore } from "../../store/counStore";

const AboutPage = () => {
    const {count,category,increase,decrease,reset,update} = countStore()
    return(
        <div>
            <div>About Page</div>
            <h1>Cont : {count}</h1>
            <h1>category : {category.length}</h1>
            <Space>
                <Button onClick={increase}>+</Button>
                <Button onClick={decrease}>-</Button>
                <Button onClick={reset} danger>Reset</Button>
                <Button onClick={() => update(999)}>Update to (999)</Button>
            </Space>
        </div>
    )
}

export default AboutPage;