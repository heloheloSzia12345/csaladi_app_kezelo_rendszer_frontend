const BASE_URL = "/manager";

export async function fetchMenus() {
    const response = await fetch(`${BASE_URL}/menu`);
    return response.json();
}

export async function fetchMenuById(id) {
    const response = await fetch(`${BASE_URL}/menu/${id}`);
    return response.json();
}

export async function createMenu(menu) {
    const response = await fetch(`${BASE_URL}/menu`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(menu)
        }
    );
    return response.json();
}

export async function updateMenu(id, menu) {
    const response = await fetch(`${BASE_URL}/menu/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(menu)
        }
    );
    return response.json();
}

export async function deleteMenu(id) {
    await fetch(`${BASE_URL}/menu/${id}`, {
            method: "DELETE"
        }
    );
}