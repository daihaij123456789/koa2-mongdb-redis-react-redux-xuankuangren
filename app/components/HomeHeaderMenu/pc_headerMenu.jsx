import React from 'react';
import {Row, Col,Menu,Icon,Button} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import './pc_Menu.less'
class PcHomeHeaderMenu extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    };

    logout(){
    	this.props.logout()
    };
	handleClick(e){
		this.props.handleClick(e);
	}
    render(){
		const userShow = this.props.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.props.userNickName}</Button>
					&nbsp;&nbsp;
					
					<Button type="dashed" htmlType="button"><Link target="_blank" to={`/usercenter`} className="ant-menu-item">个人中心</Link></Button>
					
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;
    	return (
    		<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.props.current]}>
				<Menu.Item key="top">
	            <Icon type="appstore"/>头条
	            </Menu.Item>
	            <Menu.Item key="shehui">
	                <Icon type="appstore"/>社会
	            </Menu.Item>
	            <Menu.Item key="guonei">
	                <Icon type="appstore"/>国内
	            </Menu.Item>
	            <Menu.Item key="guoji">
	                <Icon type="appstore"/>国际
	            </Menu.Item>
	            <Menu.Item key="yule">
	                <Icon type="appstore"/>娱乐
	            </Menu.Item>
	            <Menu.Item key="tiyu">
	                <Icon type="appstore"/>体育
	            </Menu.Item>
	            <Menu.Item key="keji">
	                <Icon type="appstore"/>科技
	            </Menu.Item>
	            <Menu.Item key="shishang">
	                <Icon type="appstore"/>时尚
	            </Menu.Item>
				{userShow}
			</Menu>
    		)
    }
}


export default PcHomeHeaderMenu







