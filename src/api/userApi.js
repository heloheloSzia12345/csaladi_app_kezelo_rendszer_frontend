const BASE_URL = "/manager";

export async function fetchUsers() {
    const response = await fetch(`${BASE_URL}/user`);
    return response.json();
}

export async function fetchUserById(id) {
    const response = await fetch(`${BASE_URL}/user/${id}`);
    return response.json();
}

export async function createUser(user) {
    const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        }
    );
    return response.json();
}

export async function updateUser(id, user) {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        }
    );
    return response.json();
}

export async function deleteUser(id) {
    await fetch(`${BASE_URL}/user/${id}`, {
        method: "DELETE"
        }
    );
}