export default function ShowButton() {
    const showPass = () => {
        if (document.getElementById('show-btn').innerHTML === 'hide') {
            document.getElementById('show-btn').innerHTML = 'show';
            document.getElementById('pass').style.display = 'none';
        } else {
            document.getElementById('show-btn').innerHTML = 'hide';
            document.getElementById('pass').style.display = 'inline';
        }
    }

    return(
        <button id="show-btn" onClick={showPass}>show</button>
    )
}