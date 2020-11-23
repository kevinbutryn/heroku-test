import runDBQuery as runQuery

def getExercise_all(data):
    query = """select * from exercise where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records


def getcaloriesBurned_all_homePage(data):
    query = """select date_time, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'7 days\') and date_time <= current_date GROUP BY date_time;"""
    # query = """select * from food where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records
