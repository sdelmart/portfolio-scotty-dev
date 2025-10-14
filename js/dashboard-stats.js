// ========== CHARGEMENT DES STATISTIQUES ==========
(function() {
    var API_URL = 'http://127.0.0.1:5001';
    
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
            console.log('⏳ Elements stats non trouves, nouvelle tentative dans 1s...');
            setTimeout(chargerStatistiques, 1000);
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
    
    // Attendre le chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('📄 DOM pret, demarrage dans 1.5s...');
            setTimeout(chargerStatistiques, 1500);
        });
    } else {
        console.log('📄 DOM deja pret, demarrage dans 1.5s...');
        setTimeout(chargerStatistiques, 1500);
    }
    
    // Recharger automatiquement toutes les 15 secondes (réduit de 30s à 15s)
    setInterval(chargerStatistiques, 15000);
})();
