interface SubTitleProps {
    content: string
}

export function SubTitle(props: SubTitleProps) {
 return (
    <h1 className="text-3xl">{props.content}</h1>
 )
}