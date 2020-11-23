import runDBQuery as runQuery

def login(user_email, user_pass):
    query = """SELECT email, user_password, is_admin FROM regularuser WHERE email=\'"""+user_email+"""\';"""
    records = runQuery.queryDB(query)
    if records:
        if user_pass == records[0]["user_password"]:
            return True, records[0]["is_admin"]
    return False, False
