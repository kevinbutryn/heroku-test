import runDBQuery as runQuery

def getFood_all(data):
    query = """select * from food where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records

def getFood_all_homePage(data):
    query = """select date_time, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'7 days\') and date_time <= current_date GROUP BY date_time;"""
    # query = """select * from food where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records


def get_articles(data):
    query = """select * FROM articles"""
    # query = """select * from food where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records
