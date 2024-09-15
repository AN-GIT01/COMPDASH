SELECT
  id,
  "createdAt",
  COMMENT
FROM
  "ScanDate"
WHERE
  (
    "createdAt" = (
      SELECT
        max("ScanDate_1"."createdAt") AS max
      FROM
        "ScanDate" "ScanDate_1"
    )
  );