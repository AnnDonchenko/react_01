import {useState} from "react";

export default function ToDoForm({onSubmit}) {
    const [formState, setFormState] = useState({title: '', description: ''});
    const [isLoading, setLoading] = useState(false);
    const onFormChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (!formState.title || !formState.description || isLoading) return;
        try {
            setLoading(true);
            await onSubmit(formState.title, formState.description);
            setFormState({title: '', description: ''});
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" name="title" onChange={onFormChange} value={formState.title} placeholder={'title'}/>
            <br/>
            <input type="text" name="description" onChange={onFormChange} value={formState.description}
                   placeholder={'description'}/>
            <br/>
            <button type="submit" disabled={!formState.title || !formState.description || isLoading}>create todo</button>
        </form>
    );
}