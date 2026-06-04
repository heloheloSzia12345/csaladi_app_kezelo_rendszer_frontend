const BASE_URL = "/manager";

export async function fetchApplications() {
    const response = await fetch(`${BASE_URL}/application`);
    return response.json();
}

export async function fetchApplicationById(id) {
    const response = await fetch(`${BASE_URL}/application/${id}`);
    return response.json();
}

export async function createApplication(application) {
    const response = await fetch(`${BASE_URL}/application`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(application)
        }
    );
    return response.json();
}

export async function updateApplication(id, application) {
    const response = await fetch(`${BASE_URL}/application/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(application)
        }
    );
    return response.json();
}

export async function deleteApplication(id) {
    await fetch(`${BASE_URL}/application/${id}`, {
            method: "DELETE"
        }
    );
}