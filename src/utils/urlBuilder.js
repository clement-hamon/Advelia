export default function (baseUrl, searchCriterion, countCriteria, sortBy){
    let url = baseUrl;
    
    if(searchCriterion.length > 0){
      url += 'search='
      for (let i = 0; i < searchCriterion.length; i++) {
        const criteria = searchCriterion[i];
        url += criteria.key + ':"' + criteria.value + '"';
        if(i < searchCriterion.length - 1){
          url += '+AND+'
        }
      }
    }

    if(countCriteria){
      url += '&count=' + countCriteria
    }

    if(sortBy){
      url += '&sort=' + sortBy.key + ':' + sortBy.value
    }

    return url;
  }