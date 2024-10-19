const dataworkspace = [
    {
        id: 1,
        name: 'Utn',
        channels: [
            {
                id: 1,
                name: 'chatGeneral',
                messages: [
                    {
                        id: 1,
                        author: 'mensajeDeCanal!',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'MensajeDeCanal1',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Backend',
        channels: [
            {
                id: 1,
                name: 'ChatGeneral',
                messages: [
                    {
                        id: 1,
                        author: 'backautor',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'backautor',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Utilidades',
                messages: [
                    {
                        id: 1,
                        author: 'backUtilidades',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'backUtilidades2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 3,
                name: 'unomas',
                messages: [
                    {
                        id: 1,
                        author: 'unomas',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'unomas',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    }
]


import { v4 as uuidv4 } from "uuid"


const obtenerWorkspaces = () => {
    let workspaces = localStorage.getItem("workspaces")
    if (workspaces) {
        return JSON.parse(workspaces)
    }
    else {
        localStorage.setItem("workspaces", JSON.stringify(dataworkspace))
        return (dataworkspace)
    }
}

const crearworkspace = (nuevoWorkspace) => {
    nuevoWorkspace.id = uuidv4()
    let workspaces = obtenerWorkspaces()

    workspaces.push(nuevoWorkspace)
    localStorage.setItem("workspaces", JSON.stringify(workspaces))

}

const obtenerWorkspacesPorId = (id) => {
    let allworkspaces = obtenerWorkspaces()
    let workspaceId = allworkspaces.find(workspaceId => workspaceId.id == id)

    return (workspaceId)
}

/* const crearCanal = (workspace_id, name_new_channel) => {
    const workspace_seleccionado = obtenerWorkspacesPorId(workspace_id)
    const new_channel = {
        name: name_new_channel,
        messages: [],
        id: uuidv4()
    }
    workspace_seleccionado.channels.push(new_channel)
    localStorage.setItem('workspaces', JSON.stringify(workspace_seleccionado))
} */


/* En tu funcion handler del onSubmit podes llamar a tu funcion asi
crearCanal(1, 'pepe')
 */




const crearCanal = (workspace_id, name_new_channel) => {
    let workspaces = obtenerWorkspaces() // Obtén el array completo de workspaces
    const workspace_seleccionado = workspaces.find(ws => ws.id === workspace_id)
    const new_channel = {
        id: uuidv4(),
        name: name_new_channel,
        messages: [
            {
                id: uuidv4(),
                author: '',
                text: '',
            },
        ],
    }

    workspace_seleccionado.channels.push(new_channel)

    // Actualiza el localStorage con el array completo de workspaces
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
};

const crearMensaje = (workspace_id, channel_id, text) => {
    let workspaces = obtenerWorkspaces()
    const workspace_seleccionado = workspaces.find(ws => ws.id === workspace_id)
    const canal_seleccionado = workspace_seleccionado.channels.find(canal => canal.id == channel_id)
    const new_message = {
        id: uuidv4(),
        author: "yo",
        text: text,
    };
    canal_seleccionado.messages.push(new_message)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}
const obtenerMensajesPorCanalId = (workspace_id, channel_id) => {
    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(ws => ws.id == workspace_id)
    const canal = workspace.channels.find(c => c.id == channel_id)
    return canal.messages; // Devuelve los mensajes del canal
}

export { obtenerWorkspaces, crearworkspace, obtenerWorkspacesPorId, crearCanal, crearMensaje,obtenerMensajesPorCanalId }