interface TitleProps {
    className?: string;
}

const Title = ({ className }: TitleProps) => {
    return <h1 className={`logo-gradient text-3xl font-bold ${className}`}>TaskManager</h1>
}

export default Title;
