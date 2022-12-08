export default function TextButton({text}) {
    const background = 'bg-gradient-to-r from-slate-600 to-slate-500';
    const fontColor = 'text-white'
    const formatting = 'px-4 py-2 rounded-md'

    return (
        <a className={background + ' ' + fontColor + ' ' + formatting} href="#">{text}</a>
    );
}