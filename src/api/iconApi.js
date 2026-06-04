const BASE_URL = "/manager";

export async function fetchIcons() {
    const response = await fetch(`${BASE_URL}/icon`);
    return response.json();
}

export async function fetchIconById(id) {
    const response = await fetch(`${BASE_URL}/icon/${id}`);
    return response.json();
}

export async function createIcon(icon) {
    const response = await fetch(`${BASE_URL}/icon`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(icon)
        }
    );
    return response.json();
}

export async function updateIcon(id, icon) {
    const response = await fetch(`${BASE_URL}/icon/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(icon)
        }
    );
    return response.json();
}

export async function deleteIcon(id) {
    await fetch(`${BASE_URL}/icon/${id}`, {
            method: "DELETE"
        }
    );
}