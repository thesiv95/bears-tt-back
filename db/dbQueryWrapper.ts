import connection from './dbConnection';

const dbQueryWrapper = async (sqlText: string) => {
   return new Promise((resolve, reject) => {
     return connection.query(sqlText, function (error, results) {
        if (error) {
            reject(error);
        }
        resolve(results);
      });
   })
};

export default dbQueryWrapper;