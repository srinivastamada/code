function pascalFunction(numOfRows) {
    
      //initiating the pascal array
      var triangleArray = [[1]];
      var tier, i, j;
    
      
      for (i = 0; i < numOfRows-1; i++) {
        tier = [1];
        for (j = 1; j < triangleArray[i].length; j++) {
          tier[j] = triangleArray[i][j] + triangleArray[i][j-1];
        }
        
        //Child array push
        tier.push(1);
        
        //Parent array
        triangleArray.push(tier);
      }
    
      return triangleArray;
    }
    
    
    //Change the row value
    var rows = 13;
    
    //Priting pascal array
    console.log(pascalFunction(rows));