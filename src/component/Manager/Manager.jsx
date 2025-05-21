import React, { useEffect, useState } from 'react'
import EnterKey from '../../assets/send.png'
import { TextareaAutosize, TextField, Button, Paper,IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { addNotes, editNotes, updateNotes,deleteNotes } from '../../Noteslice/Slice'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function capitalwords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase())
}

function Manager() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [row, setRow] = useState([]);
  const row = useSelector((state) => state.notes.notes);
  const [edit, setEdit] = useState(null)


  const notes = useSelector((state) => (state.notes.notes));
    const dispatch = useDispatch();


  // useEffect(() => {
  //   try {
  //     const saved = JSON.parse(localStorage.getItem('notes')) || [];
  //     setRow(Array.isArray(saved) ? saved : []);
  //   } catch (error) {
  //     console.error('Invalid JSON in localStorage, resetting:', error);
  //     localStorage.setItem('notes', JSON.stringify([]));
  //     // setRow([]);
  //   }
  // }, []);

  
  // const newEntry = {
  //   id: Date.now(),
  //   title,
  //   description,
  // };

  // const updateTable = [...row, newEntry];
  // setRow(updateTable);

  // localStorage.setItem('notes', JSON.stringify(updateTable));

  const handleclick = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    if (!title.trim() || !description.trim()) {
      alert('Enter title and description');
      return;
    }

    const capitalTitle = capitalwords(title.trim());
    const capitalDescription = capitalwords(description.trim());

    if (edit) {
      dispatch(editNotes({ id: edit, title: capitalTitle, description:capitalDescription }));
    } else {
      dispatch(addNotes({ id: Date.now(), title:capitalTitle, description:capitalDescription }));
    }

    setTitle('');
    setDescription('');
    setEdit(null);
  }
};

  const handleEdit = (note) => {
    console.log('Editing note:', { id: edit, title, description });
    // console.log('update', note)
    setTitle(note.title)
    setDescription(note.description)
    setEdit(note.id)
  }

  const handleDelete = (id) => {
     console.log('Delete:', id);
    dispatch(deleteNotes(id));
  }

  const handleUpdate = (id) => {
    dispatch(updateNotes())
  }

  const column = [

    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 500 },
    {
      field: 'action',
      headerName: 'action',
      renderCell: (params) => (
        <>
        <IconButton
        onClick={() => handleEdit(params.row)}
        >
          <EditIcon/>
        </IconButton>
        <IconButton onClick={()=> handleDelete(params.row.id)}>
          <DeleteIcon/>
        </IconButton>
        </>
      )
    }

  ]

  return (
    < >
      <div >

        <div className='flex flex-wrap justify-center items-center md:my-10'>
          <TextField
            variant='standard'
            placeholder='FILE TITLE'
            value={title}
            className=' w-1/3'
            inputProps={{ style: { textAlign: 'center' } }}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleclick}

          />
        </div>
        <div className='flex justify-center items-center flex-col gap-6'>
          <TextareaAutosize
            className='w-1/2 bg-transparent text-center border border-black'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-label='minimum-height'
            minRows={7}
            placeholder='Enter your notes'
          />
          <Button className='bg-cyan-400'
            variant='contained'
            onClick={handleclick}>
            Enter  <img src={EnterKey} alt="Enter"
              className='size-5 mx-3 !ring-0 !outline-none focus:!ring-0 focus:!outline-none focus:!ring-transparent' />

          </Button>
        </div>

        <div className='border border-black max-h-max fourth-color text-white md:mx-32 md:my-10'>
          <Paper sx={{ backgroundColor: '#0d47a1' }}>
            <DataGrid
              rows={row}
              columns={column}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
            />
          </Paper>
        
        </div>
      </div>
    </>
  )
}

export default Manager
