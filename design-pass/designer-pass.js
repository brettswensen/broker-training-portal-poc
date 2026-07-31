
(function(){
  function syncSearchMode(q){
    var value = String(q || (document.getElementById('globalSearch') && document.getElementById('globalSearch').value) || '').trim();
    document.body.classList.toggle('search-mode', !!value);
    var note = document.querySelector('.designer-search-note');
    if(!note){
      note = document.createElement('section');
      note.className = 'designer-search-note';
      note.innerHTML = '<strong>Designer-pass behavior:</strong> search now becomes a focused <span>All Content mode</span>, so duplicate dashboard sections collapse while the broker can compare top results, transcript rows, playbooks, and training videos without scrolling through the whole homepage.';
      var all = document.getElementById('all-content');
      if(all && all.parentNode) all.parentNode.insertBefore(note, all.nextSibling);
    }
  }
  var originalRender = window.renderResults;
  if(typeof originalRender === 'function'){
    window.renderResults = function(query){
      originalRender(query);
      syncSearchMode(query);
    };
  }
  document.addEventListener('input', function(e){ if(e.target && e.target.id === 'globalSearch') syncSearchMode(e.target.value); });
  document.addEventListener('click', function(){ setTimeout(syncSearchMode, 30); });
  var params = new URLSearchParams(location.search);
  var q = params.get('q');
  if(q){
    var input = document.getElementById('globalSearch');
    if(input) input.value = q;
    if(typeof window.renderResults === 'function') window.renderResults(q);
    setTimeout(function(){ document.getElementById('all-content')?.scrollIntoView({behavior:'instant', block:'start'}); }, 50);
  } else {
    syncSearchMode('');
  }
})();
