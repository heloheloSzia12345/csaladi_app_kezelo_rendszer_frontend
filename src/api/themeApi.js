const BASE_URL = "/manager";

export async function fetchThemes() {
    const response = await fetch(`${BASE_URL}/theme`);
    return response.json();
}

export async function fetchThemeById(id) {
    const response = await fetch(`${BASE_URL}/theme/${id}`);
    return response.json();
}

export async function createTheme(theme) {
    const response = await fetch(`${BASE_URL}/theme`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(theme)
        }
    );
    return response.json();
}

export async function updateTheme(id, theme) {
    const response = await fetch(`${BASE_URL}/theme/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(theme)
        }
    );
    return response.json();
}

export async function deleteTheme(id) {
    await fetch(`${BASE_URL}/theme/${id}`, {
        method: "DELETE"
        }
    );
}