
(function(){
  function isCompare(){ return new URLSearchParams(location.search).has('compare'); }
  function libraryUrl(q){ var value = String(q || '').trim(); return '/library/' + (value ? '?q=' + encodeURIComponent(value) : ''); }
  function routeSearch(q){ if(isCompare()) return false; window.location.href = libraryUrl(q); return true; }
  function syncSearchMode(q){
    var value = String(q || (document.getElementById('globalSearch') && document.getElementById('globalSearch').value) || '').trim();
    document.body.classList.toggle('search-mode', !!value && isCompare());
  }
  var originalRender = window.renderResults;
  if(typeof originalRender === 'function'){
    window.renderResults = function(query){
      if(!isCompare() && String(query || '').trim()) return;
      originalRender(query);
      syncSearchMode(query);
    };
  }
  document.addEventListener('keydown', function(e){
    if(e.target && e.target.id === 'globalSearch' && e.key === 'Enter'){
      e.preventDefault(); routeSearch(e.target.value);
    }
  }, true);
  document.addEventListener('click', function(e){
    var chip = e.target && e.target.closest && e.target.closest('[data-query]');
    if(chip && !isCompare()){
      e.preventDefault(); e.stopPropagation(); routeSearch(chip.dataset.query); return;
    }
    setTimeout(syncSearchMode, 30);
  }, true);
  var params = new URLSearchParams(location.search);
  var q = params.get('q');
  if(q && !isCompare()) routeSearch(q);
  else if(q){
    var input = document.getElementById('globalSearch');
    if(input) input.value = q;
    if(typeof window.renderResults === 'function') window.renderResults(q);
  } else syncSearchMode('');
})();
