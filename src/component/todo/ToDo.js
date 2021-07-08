export default function ToDo (){
    const onInputChange = () => {

    }
    return (
        <div>
            <form>
                <input type="text" name="title" onChange={onInputChange} />
                <input type="text" name="body" onChange={onInputChange} />
                <button>add To Do</button>
            </form>
        </div>
    );
}