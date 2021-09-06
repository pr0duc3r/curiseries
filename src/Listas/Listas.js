import { Card, Row, Col } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

const { Meta } = Card;

const Listas = () => (
<div className="site-card-wrapper">
    <Row gutter={16}>
        <Col md-12>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://lightbox-prod.imgix.net/images/assets/100191281-p14432013_b_v9_aa.jpg" />}
                actions={[
                    <SmileTwoTone />,
                    <HeartTwoTone twoToneColor="#eb2f96" />,
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ]}                    
                >
                <Meta title="Future Man" />
            </Card>
        </Col>
        <Col md-12>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://lightbox-prod.imgix.net/images/assets/100191281-p14432013_b_v9_aa.jpg" />}
            actions={[
                <SmileTwoTone />,
                <HeartTwoTone twoToneColor="#eb2f96" />,
                <CheckCircleTwoTone twoToneColor="#52c41a" />
            ]}               
            >
            <Meta title="Future Man" />
            </Card>    
        </Col>
    </Row>
</div>
);

export default Listas;

