import Button from '@material-ui/core/Button';

function ButtonNav(props) {
    const {
        color, //'default'| 'inherit'| 'primary' | 'secondary'
        text, // size 'large'| 'medium'| 'small'
        size, //'large'|'medium'|'small'
        OnClick
    } = props;
    
    return (
        <div>
            <Button 
            color={color} 
            size={size}
            onClick={() => OnClick()}
            >
                {text}
            </Button>
        </div>
    )
}
export default ButtonNav;