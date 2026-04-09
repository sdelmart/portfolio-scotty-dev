// Dashboard Script - API Communication
const API_BASE_URL = 'https://scotty-dashboard-api.onrender.com/api';

const DASHBOARD_UI_TEXT = {
    fr: {
        loading: 'Chargement...',
        error: 'Erreur',
        weatherError: 'Erreur météo',
        emptyTodos: 'Aucune tâche',
        emptyGoals: 'Aucun objectif',
        emptyReminders: 'Aucun rappel'
    },
    en: {
        loading: 'Loading...',
        error: 'Error',
        weatherError: 'Weather error',
        emptyTodos: 'No tasks',
        emptyGoals: 'No goals',
        emptyReminders: 'No reminders'
    }
};

function getDashboardText(key) {
    const lang = (document.documentElement.lang || 'fr').startsWith('en') ? 'en' : 'fr';
    return DASHBOARD_UI_TEXT[lang]?.[key] || DASHBOARD_UI_TEXT.fr[key] || '';
}


// Helper pour rafraîchir les stats après une action
function refreshStatsIfAvailable() {
    if (typeof globalThis.refreshStats === 'function') {
        setTimeout(globalThis.refreshStats, 300);
    }
}



function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = '<div class="loading">' + getDashboardText('loading') + '</div>';
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = '<div class="error-msg-small">' + message + '</div>';
}

async function loadTodos() {
    showLoading('todos-list');
    try {
        const response = await fetch(API_BASE_URL + '/todos');
        const todos = await response.json();
        displayTodos(todos);
        updateTodosCount(todos);
    } catch (error) {
        console.error('Erreur:', error);
        showError('todos-list', getDashboardText('error'));
    }
}

function displayTodos(todos) {
    const todosList = document.getElementById('todos-list');
    if (!todosList) return;
    if (todos.length === 0) {
        todosList.innerHTML = '<div class="empty-state">' + getDashboardText('emptyTodos') + '</div>';
        return;
    }
    todosList.innerHTML = todos.map(todo => 
        '<div class="todo-item ' + (todo.completed ? 'completed' : '') + '" data-priority="' + todo.priority + '">' +
            '<input type="checkbox" ' + (todo.completed ? 'checked' : '') + ' onchange="toggleTodo(\'' + todo.id + '\')">' +
            '<div class="todo-content">' +
                '<div class="todo-title">' + todo.title + '</div>' +
                (todo.due ? '<div class="todo-due">📅 ' + todo.due + '</div>' : '') +
            '</div>' +
            '<span class="priority-badge priority-' + todo.priority + '">' + todo.priority + '</span>' +
            '<button class="delete-btn" onclick="deleteTodo(\'' + todo.id + '\')">×</button>' +
        '</div>'
    ).join('');
}

function updateTodosCount(todos) {
    const activeTodos = todos.filter(t => !t.completed).length;
    // use the badge id present in dashboard.html
    const countElement = document.getElementById('task-counter');
    if (countElement) countElement.textContent = activeTodos;
}

async function addTodo(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.querySelector('input[type="text"]').value;
    const priority = form.querySelector('select').value;
    const due = form.querySelector('input[type="date"]').value;
    try {
        const response = await fetch(API_BASE_URL + '/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, priority, due: due || null })
        });
        if (response.ok) {
            form.reset();
            loadTodos();
        if (globalThis.refreshStats) globalThis.refreshStats(); }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

async function toggleTodo(id) {
    try {
        const response = await fetch(API_BASE_URL + '/todos/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: true })
        });
        if (response.ok) loadTodos();
        if (globalThis.refreshStats) globalThis.refreshStats(); } catch (error) {
        console.error('Erreur:', error);
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(API_BASE_URL + '/todos/' + id, { method: 'DELETE' });
        if (globalThis.refreshStats) globalThis.refreshStats();
        if (response.ok) loadTodos();
        if (globalThis.refreshStats) globalThis.refreshStats(); } catch (error) {
        console.error('Erreur:', error);
    }
}

async function loadWeather() {
    // HTML uses weather-widget
    showLoading('weather-widget');
    try {
        const response = await fetch(API_BASE_URL + '/weather');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Erreur:', error);
        showError('weather-widget', getDashboardText('weatherError'));
    }
}

function displayWeather(data) {
    const weatherData = document.getElementById('weather-widget');
    if (!weatherData) return;
    if (data.error) {
        weatherData.innerHTML = '<div class="error-msg-small">' + data.error + '</div>';
        return;
    }
    // prefer 'temperature' (backend) but accept 'temp' as fallback
    const rawTemp = data.temperature === undefined ? data.temp : data.temperature;
    const tempNum = (rawTemp === null || rawTemp === undefined) ? Number.NaN : Number(rawTemp);
    const tempDisplay = Number.isFinite(tempNum) ? Math.round(tempNum) + '°C' : '-';

    // City name: backend provides `city` (e.g., "Limoges"). Accept common fallbacks.
    const city = data.city || data.name || '';

    weatherData.innerHTML = '<div class="weather-display-compact">' +
        (city ? '<div class="weather-city">' + city + '</div>' : '') +
        '<div class="weather-temp-compact">' + tempDisplay + '</div>' +
        '<div class="weather-info-compact">' +
            '<div class="weather-desc">' + (data.description || '') + '</div>' +
            '<div class="weather-extra">💧 ' + (data.humidity || '-') + '%</div>' +
        '</div>' +
    '</div>';
}

async function loadLinks() {
    try {
        const response = await fetch(API_BASE_URL + '/links');
        const links = await response.json();
        displayLinks(links);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function displayLinks(links) {
    const linksList = document.getElementById('links-list');
    if (!linksList) return;
    linksList.innerHTML = links.map(link => '<a href="' + link.url + '" class="quick-link" target="_blank" rel="noopener noreferrer">' + link.name + '</a>').join('');
}

async function loadGoals() {
    try {
        const response = await fetch(API_BASE_URL + '/goals');
        const data = await response.json();
        const goals = Array.isArray(data) ? data : (data.goals || []);
        displayGoals(goals);
        loadGoalStats();
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function displayGoals(goals) {
    const goalsList = document.getElementById('goals-list');
    if (!goalsList) return;
    if (goals.length === 0) {
        goalsList.innerHTML = '<div class="empty-state">' + getDashboardText('emptyGoals') + '</div>';
        return;
    }
    goalsList.innerHTML = goals.map(goal => '<div class="goal-item ' + (goal.completed ? 'completed' : '') + '"><input type="checkbox" ' + (goal.completed ? 'checked' : '') + ' onchange="toggleGoal(' + goal.id + ')"><span class="goal-text">' + goal.text + '</span></div>').join('');
}

async function loadGoalStats() {
    try {
        const response = await fetch(API_BASE_URL + '/goals/stats');
        const stats = await response.json();
        displayGoalStats(stats);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function displayGoalStats(stats) {
    const progressBar = document.getElementById('goals-progress');
    const progressText = document.getElementById('goals-percentage');
    if (progressBar) progressBar.style.width = (stats.percentage || 0) + '%';
    if (progressText) progressText.textContent = (stats.percentage || 0) + '%';
}

async function addGoal(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input[type="text"]');
    if (!input) return;
    const text = input.value;
    try {
        const response = await fetch(API_BASE_URL + '/goals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        if (response.ok) {
            form.reset();
            loadGoals(); }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

async function toggleGoal(id) {
    try {
        const response = await fetch(API_BASE_URL + '/goals/' + id + '/toggle', { method: 'POST' });
        if (response.ok) loadGoals();
        if (globalThis.refreshStats) globalThis.refreshStats(); } catch (error) {
        console.error('Erreur:', error);
    }
}

async function loadReminders() {
    try {
        const response = await fetch(API_BASE_URL + '/reminders');
        const reminders = await response.json();
        displayReminders(reminders);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function displayReminders(reminders) {
    const remindersList = document.getElementById('reminders-list');
    if (!remindersList) return;
    if (reminders.length === 0) {
        remindersList.innerHTML = '<div class="empty-state">' + getDashboardText('emptyReminders') + '</div>';
        return;
    }
    remindersList.innerHTML = reminders.map(reminder => '<div class="reminder-item urgency-' + reminder.urgency + '"><div class="reminder-content"><div class="reminder-header"><span class="reminder-title">' + reminder.title + '</span><span class="reminder-type">' + reminder.type + '</span></div><div class="reminder-date">📅 ' + reminder.due_date + '</div><span class="urgency-badge urgency-' + reminder.urgency + '">' + reminder.urgency + '</span></div><button class="delete-btn" onclick="deleteReminder(\'' + reminder.id + '\')">×</button></div>').join('');
}

async function addReminder(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll('input[type="text"], input[type="date"], select');
    const title = inputs[0].value;
    const due_date = form.querySelector('input[type="date"]').value;
    const type = form.querySelector('select').value;
    try {
        const response = await fetch(API_BASE_URL + '/reminders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, due_date, type })
        });
        if (response.ok) {
            form.reset();
            loadReminders(); }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

async function deleteReminder(id) {
    try {
        const response = await fetch(API_BASE_URL + '/reminders/' + id, { method: 'DELETE' });
        if (response.ok) loadReminders();
        if (globalThis.refreshStats) globalThis.refreshStats(); } catch (error) {
        console.error('Erreur:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTodos(); loadWeather();
    loadLinks();
    loadGoals(); loadReminders(); const todoForm = document.getElementById('todo-form');
    if (todoForm) todoForm.addEventListener('submit', addTodo);
    const goalForm = document.getElementById('goal-form');
    if (goalForm) goalForm.addEventListener('submit', addGoal);
    const reminderForm = document.getElementById('reminder-form');
    if (reminderForm) reminderForm.addEventListener('submit', addReminder);
    setInterval(() => { loadTodos(); loadGoals(); loadReminders(); }, 30000);
    setInterval(loadWeather, 300000);
});
