import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className="headerStyle.title">
                <span>Code</span> update
            </h1>
            <p className={headerStyle.description}>Update about the JS framework</p>
        </div>
        
    )
}

export default Header