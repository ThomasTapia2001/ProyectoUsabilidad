const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    userInput.value = '';

    // Muestra un indicador de carga
    appendMessage('bot', 'Esperando respuesta...', true);

    // Simula una respuesta del chatbot (aquí puedes personalizar las respuestas)
    setTimeout(() => {
        const response = getResponse(userMessage);
        // Elimina el indicador de carga antes de mostrar la respuesta real
        removeLastMessage();
        appendMessage('bot', response);
    }, 1000);
});

function appendMessage(sender, message, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    if (isLoading) {
        messageDiv.classList.add('loading');
    }

    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);

    // Desplaza automáticamente hacia abajo para mostrar el mensaje más reciente
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLastMessage() {
    const lastMessage = chatMessages.lastChild;
    if (lastMessage) {
        chatMessages.removeChild(lastMessage);
    }
}

function getResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("¿qué planes ofrecen?")) {
        return 'Ofrecemos paquetes personalizados según tus necesidades y alcance de publicación.';
    } else if (userMessage.includes("¿quiero publicar únicamente para loja?")) {
        return 'Claro, en ese caso tenemos direcciones estratégicas para que puedas verlo en una pancarta. ¿Te gustaría recibir más información?';
    } else if (userMessage === "si") {
        return 'Por favor, proporciona la siguiente información: número de celular, nombres, apellidos, correo electrónico y la provincia por la que nos envías el mensaje.';
    } else {
        return 'Lo siento, no entendí tu pregunta. ¿Puedes reformularla o hacer otra pregunta?';
    }
}
