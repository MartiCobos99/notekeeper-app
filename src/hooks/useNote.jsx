import { useState, useEffect } from "react";
import noteService from "../services/notes/noteService.js";

export const useNote = () => {
    const [note, setNote] = useState([]);
    const handleNote = (newValue) => {
        setNote(newValue);
    }
    const getNote = () => {
        noteService.getAll().then((data) => {
        setNote(data.notes);
        });
    };
    useEffect(() => {
        getNote();
    })
    return {
        note,
        handleNote
    }
}