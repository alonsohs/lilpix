import React, {useState} from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import './index.css'

const Tab = ({ children , chageSelectedTab}) => {
    const { onClick } = useTabState();
    
    const handleClick = () => {
        chageSelectedTab()
        onClick()
    }

    return <button onClick={handleClick}>{children}</button>;
};

const PostDetails = (props) => {
    const [selected, setSelected] = useState(1)


    const setSelectedTab = (newSelected) => {
        setSelected(newSelected)
        console.log(selected);
    }
    
    return (
        <Tabs>
            <div className="tab__button__container">
                <Tab chageSelectedTab={() => setSelectedTab(1)}>
                    <button 
                        className={`tab__button ${selected === 1 ? 'selected': ''}`} 
                        >
                            Download
                    </button>
                </Tab>
                <Tab chageSelectedTab={() => setSelectedTab(2)}><button className={`tab__button ${selected === 2 ? 'selected': ''}`}>Blender</button></Tab>
                <Tab chageSelectedTab={() => setSelectedTab(3)}><button className={`tab__button ${selected === 3 ? 'selected': ''}`} >Info</button></Tab>
            </div>

            <Panel active><div className="tab__panel">, ipsum dolor sit amet consectetur adipisicing elit. Minus.</div></Panel>
            <Panel><div className="tab__panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, numquam!</div></Panel>
            <Panel><div className="tab__panel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veritatis placeat odit, ducimus et dicta aliquam. Eveniet, mollitia dolorum. Repellendus in ea aliquam distinctio ab ipsam obcaecati vero modi velit similique sint omnis dolor quaerat recusandae voluptatum numquam blanditiis aliquid dolorem, iste suscipit illo. Corrupti facilis consequuntur illum sit delectus deserunt dolore eius! Impedit nobis ad et, fugiat quisquam labore eius laborum praesentium accusamus incidunt ab facere ducimus! Cum soluta dolore pariatur laudantium architecto nostrum. Architecto amet alias cumque soluta, libero molestias temporibus delectus harum perferendis unde ducimus sequi minima eius expedita eaque beatae dolorum magnam dignissimos enim. Ipsa corporis dolor culpa explicabo harum pariatur delectus esse minima repellat. Explicabo neque numquam exercitationem quasi sint perspiciatis, tempore est maiores? Laborum neque perferendis eligendi voluptate saepe! Neque fuga amet qui ad. Reiciendis!</div></Panel>
        </Tabs>
    )
}

export default PostDetails;