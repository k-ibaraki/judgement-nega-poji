import requests
import os
import json

# loggerの設定
from logging import getLogger, StreamHandler, DEBUG
logger = getLogger(__name__)
handler = StreamHandler()
handler.setLevel(DEBUG)
logger.setLevel(DEBUG)
logger.addHandler(handler)
logger.propagate = False

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logger.info('Python HTTP trigger function processed a request.')

    req_body = None
    try:
        req_body = req.get_json()
    except ValueError:
        pass

    # Text Analyticsのエンドポイント
    host = os.environ["TEXT_ANALYTICS_ENDPOINT"] + 'text/analytics/v3.1-preview.3/sentiment'
    # キー
    key = os.environ["TEXT_ANALYTICS_KEY"]

    if req_body is not None:
        return func.HttpResponse(
            json.dumps(req_body, indent=2, ensure_ascii=False),
            status_code=200
        )
    else:
        return func.HttpResponse(
            "error",
            status_code=400
        )
