import React, {ReactPropTypes as PropTypes} from "react";
import Article from "./Article";


class News extends React.Component {

    renderNews = () => {
        const {data} = this.props
        let newsTemplate = null

        if (data.length) {
            newsTemplate = data.map((item) => {
                return (
                    <Article key={item.id} data={item}/>
                )
            })
        } else {
            newsTemplate = <p> no news</p>
        }

        return newsTemplate;
    }

    render() {
        const {data} = this.props
        return (
            <div className="news">
                {this.renderNews()}
                {
                    data.length ? <strong> have news: {data.length} </strong> : null
                }
            </div>

        )
    }

}

// News.propTypes ={
//     data: PropTypes.array.isRequired
//
// }

export default News;