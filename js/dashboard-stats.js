// ========== CHARGEMENT DES STATISTIQUES ==========
(function() {
    var API_URL = 'https://scotty-dashboard-api.onrender.com';
    var hasInitialized = false;
    
    function chargerStatistiques() {
        console.log('🔄 Chargement des statistiques...');
        
        var statsElements = {
            activeTodos: document.getElementById('stat-active-todos'),
            completedTodos: document.getElementById('stat-completed-todos'),
            goalsProgress: document.getElementById('stat-goals-progress'),
            activeReminders: document.getElementById('stat-active-reminders')
        };
        
        // Vérifier que les éléments existent
        if (!statsElements.activeTodos) {
            console.log('⏭️ Elements stats non trouves, arret du chargement auto.');
            return;
        }
        
        console.log('✅ Elements DOM trouves, chargement des donnees...');
        
        // Charger les todos
        fetch(API_URL + '/api/todos')
            .then(function(r) { return r.json(); })
            .then(function(todos) {
                var actifs = 0, termines = 0;
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i].completed) termines++;
                    else actifs++;
                }
                statsElements.activeTodos.textContent = actifs;
                statsElements.completedTodos.textContent = termines;
                console.log('✅ Todos charges:', actifs, 'actifs,', termines, 'termines');
            })
            .catch(function(err) { 
                console.error('❌ Erreur todos:', err);
                statsElements.activeTodos.textContent = '0';
                statsElements.completedTodos.textContent = '0';
            });
        
        // Charger les objectifs
        fetch(API_URL + '/api/goals/stats')
            .then(function(r) { return r.json(); })
            .then(function(stats) {
                var texte = stats.completed + '/' + stats.total;
                statsElements.goalsProgress.textContent = texte;
                console.log('✅ Objectifs charges:', texte);
            })
            .catch(function(err) { 
                console.error('❌ Erreur goals:', err);
                statsElements.goalsProgress.textContent = '0/0';
            });
        
        // Charger les rappels
        fetch(API_URL + '/api/reminders')
            .then(function(r) { return r.json(); })
            .then(function(reminders) {
                var actifs = 0;
                for (var i = 0; i < reminders.length; i++) {
                    if (!reminders[i].completed) actifs++;
                }
                statsElements.activeReminders.textContent = actifs;
                console.log('✅ Rappels charges:', actifs, 'actifs');
            })
            .catch(function(err) { 
                console.error('❌ Erreur reminders:', err);
                statsElements.activeReminders.textContent = '0';
            });
    }
    
    // Exposer la fonction globalement pour que les autres scripts puissent l'appeler
    window.refreshStats = chargerStatistiques;

    function initializeStats() {
        if (hasInitialized) {
            return;
        }
        hasInitialized = true;

        console.log('📄 Initialisation stats dans 1.5s...');
        setTimeout(chargerStatistiques, 1500);

        // Recharger automatiquement toutes les 15 secondes (sans boucle agressive au chargement)
        setInterval(chargerStatistiques, 15000);
    }
    
    // Attendre le chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeStats, { once: true });
    } else {
        initializeStats();
    }
})();
