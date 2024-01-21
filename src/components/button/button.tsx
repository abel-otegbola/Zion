interface buttonProps {
    text: string,
    link: string,
}

function Button({ text, link }: buttonProps) {
    const innerStyle: string = `px-8 py-[13px] rounded bg-green hover:bg-green/[0.8] text-white`
    
    return (
        <button>
            <a href={link} className={innerStyle}>
                <span>{text}</span>
            </a>
        </button>
    )
}

export default Button;