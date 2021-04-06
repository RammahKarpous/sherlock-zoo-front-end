const Header = ({children, image}) => {
	return (
        <div 
            style={{ 
                background: `url('${image}') no-repeat center center / cover`,
                height: '800px'
            }}>

            {children}
        </div>
    );
};

export default Header;
