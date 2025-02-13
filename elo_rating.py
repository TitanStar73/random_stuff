#Simple elo rating implementation for game rating

def calculate_rating(p1_rating, p2_rating, p1_outcome, k=40):
    """p1_outcome: 0 to 1, determining how much p1 won 1=won, 0=loss; k=max change in score"""
    ea = 1/(1+10**((p2_rating-p1_rating)/400))
    return p1_rating+k*(p1_outcome-ea), p2_rating+k*(ea-p1_outcome)

    