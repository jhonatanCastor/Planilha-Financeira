import * as C from './styles';
import { Item } from '../../types/Item';
import { FormEvent, useState } from 'react';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const [Data, setData_at] = useState<Date>();
    const [cate, setCate] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState<Number>();

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 10, 27),
            category: 'food',
            title: 'Pizza Mestre',
            value: 120.50
        };
        onAdd(newItem);
    }

    function cadastrarDados(e: any) {
        e.preventDefault()
        console.log("teste no campo de data", Data);
        console.log("teste no campo de data", cate);
        console.log(title);
        console.log(value);

    }

    return (
        <C.Container>
            <form onSubmit={cadastrarDados}>

                <C.Datei>
                    
                    <C.Date>
                    <label htmlFor="Data">Data:</label>
                        <input
                            type="date"
                            name="Data"
                            id="Data"
                            onChange={(e) => setData_at(new Date(e.target.value))}
                        />
                    </C.Date>

                    <C.Cate>
                        <label htmlFor="cate">Categoria</label>
                        <input
                            type="text"
                            name="cate"
                            id="cate"
                            onChange={(e) => setCate((e.target.value))}
                        />
                    </C.Cate>

                    <C.Title>
                        <label htmlFor='title'>Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => setTitle((e.target.value))}
                        />
                    </C.Title>

                    <C.Value>
                        <label htmlFor="value">R$:</label>
                        <input
                            type="number"
                            name='value'
                            id='value'
                            onChange={(e) => setValue(new Number(e.target.value))}
                        />
                    </C.Value>
                    <C.Button onClick={handleAddEvent}>
                        Adicionar
                    </C.Button>
                </C.Datei>
            </form>




        </C.Container>
    );
}