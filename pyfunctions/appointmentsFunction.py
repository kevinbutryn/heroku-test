import runDBQuery as runQuery

def getAll(data):
    print(data)
    query = """select * from appointments where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records

def getAllHomePage(data):
    # print(data)
    query = """select * from appointments where email = \'"""+data['email']+"""\' AND date_time < (current_date+INTERVAL \'7 days\') and date_time > current_date;"""
    records = runQuery.queryDB(query)
    return records
