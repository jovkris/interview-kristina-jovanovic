import { todosEndpoint } from "./endpoints";

export const getAllTodosAction = async () => {
    try {
        let res = await fetch(todosEndpoint, {
            method: "GET",
        });
        return { status: res.status, data: await res.json() };
    } catch (error) {
        console.log(error);
    }
}

export const updateTodoAction = async (id, body) => {
    try {
        let res = await fetch(`${todosEndpoint}/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return { status: res.status, data: await res.json() };
    } catch (error) {
        console.log(error);
    }
}

export const createTodoAction = async (body) => {
    try {
        let res = await fetch(`${todosEndpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return { status: res.status, data: await res.json() };
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodoAction = async (id) => {
    try {
        let res = await fetch(`${todosEndpoint}/${id}`, {
            method: "DELETE",
        });
        return { status: res.status, data: await res.json() };
    } catch (error) {
        console.log(error);
    }
}


