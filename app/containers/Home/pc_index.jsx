import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PCNewsContainer from './subpage/Pc_NewsContainer'
import Ad from './subpage/Ad'
import PcHomeHeader from './subpage/Pc_homeheader'
import List from './subpage/List'
import PcTest from './subpage/Pc_test'

class PcHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            key:'top'
        }
    }
    render() {
        switch(this.state.key){
            case 'top':
            var PCNewsContainer1 = <PCNewsContainer/>;
            break;
            case 'shehui':
            PCNewsContainer1 = <PcTest/>
            break;
        }

        return (
            <div>
                <PcHomeHeader cityName={this.props.userinfo.cityName} getHeaderKey={this.getHeaderKey.bind(this)}/>
                {PCNewsContainer1}
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad/>
            </div>
        )
    }
    getHeaderKey(val){
        this.setState({
            key:val
        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PcHome)
