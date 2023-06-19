import { Button, Card, Cascader, Col, Collapse, Input, Row, Steps } from "antd";
import TextArea from "antd/es/input/TextArea";
// import Axios from "axios";
import { useState } from "react";
function App() {
  // useEffect(() => {
  //   Axios.get("http://localhost:8888/product/getAll")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const [current, setCurrent] = useState(0);
  const onChange = (key) => {
    setCurrent(key)
  }
  return (
    <div>
      <Card style={{ width: 300 }}>
        <Steps direction="vertical" current={current} items={steps} />
      </Card>
      <br></br><br></br>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
}
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const items = [
  {
    key: "1",
    label: "General information",
    children: <>
      <Input addonAfter="0 | 255" placeholder="Product name" />
      <Cascader options={options} placeholder="Please select category" style={{ width: "100%" }} />
    </>
  },
  {
    key: "2",
    label: "Product description",
    children: <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  },
  {
    key: "3",
    label: "Product variations",
    children: <Row gutter={16}>
      <Col span={12}><Input addonBefore="d" placeholder="price" /></Col>
      <Col span={12}><Input addonBefore="sku" placeholder="" /></Col>
      <Col span={24}><Button style={{ width: "100%" }} onClick={addVariation} type="dashed">+ Add Variations</Button></Col>
    </Row>
  },
];
const steps = [
  {
    title: 'General information'
  },
  {
    title: 'Product description'
  },
  {
    title: 'Product variations'
  },
];

function addVariation() {
  console.log("add variations");
}

export default App;
