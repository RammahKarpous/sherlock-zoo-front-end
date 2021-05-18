const Header = ({children, image}) => {
	return (
        <div 
            style={{background: `url('${image}') no-repeat center center / cover`}} className="h-header">

            {children}
        </div>
    );
};

export default Header;
