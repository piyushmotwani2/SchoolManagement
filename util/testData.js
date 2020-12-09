const testData = [
    {
      "id": 0,
      "Internal": 33,
      "External": 42,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 1,
      "Internal": 33,
      "External": 42,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 2,
      "Internal": 32,
      "External": 36,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 3,
      "Internal": 22,
      "External": 58,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 4,
      "Internal": 38,
      "External": 37,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 5,
      "Internal": 20,
      "External": 40,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 6,
      "Internal": 30,
      "External": 32,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 7,
      "Internal": 29,
      "External": 37,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 8,
      "Internal": 25,
      "External": 58,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 9,
      "Internal": 29,
      "External": 34,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 10,
      "Internal": 30,
      "External": 54,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 11,
      "Internal": 20,
      "External": 51,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 12,
      "Internal": 36,
      "External": 55,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 13,
      "Internal": 39,
      "External": 40,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 14,
      "Internal": 32,
      "External": 59,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 15,
      "Internal": 36,
      "External": 58,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 16,
      "Internal": 28,
      "External": 57,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 17,
      "Internal": 33,
      "External": 52,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 18,
      "Internal": 23,
      "External": 41,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 19,
      "Internal": 35,
      "External": 38,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 20,
      "Internal": 34,
      "External": 53,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 21,
      "Internal": 26,
      "External": 38,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 22,
      "Internal": 23,
      "External": 44,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 23,
      "Internal": 38,
      "External": 44,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 24,
      "Internal": 39,
      "External": 56,
      "Total": 95,
      "Grade": 10
    },
    {
      "id": 25,
      "Internal": 26,
      "External": 43,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 26,
      "Internal": 27,
      "External": 47,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 27,
      "Internal": 21,
      "External": 32,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 28,
      "Internal": 30,
      "External": 45,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 29,
      "Internal": 20,
      "External": 40,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 30,
      "Internal": 32,
      "External": 32,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 31,
      "Internal": 21,
      "External": 43,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 32,
      "Internal": 24,
      "External": 59,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 33,
      "Internal": 29,
      "External": 41,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 34,
      "Internal": 28,
      "External": 44,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 35,
      "Internal": 22,
      "External": 35,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 36,
      "Internal": 24,
      "External": 40,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 37,
      "Internal": 23,
      "External": 38,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 38,
      "Internal": 21,
      "External": 42,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 39,
      "Internal": 36,
      "External": 48,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 40,
      "Internal": 37,
      "External": 37,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 41,
      "Internal": 34,
      "External": 33,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 42,
      "Internal": 34,
      "External": 38,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 43,
      "Internal": 24,
      "External": 40,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 44,
      "Internal": 31,
      "External": 47,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 45,
      "Internal": 38,
      "External": 54,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 46,
      "Internal": 31,
      "External": 54,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 47,
      "Internal": 32,
      "External": 40,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 48,
      "Internal": 21,
      "External": 42,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 49,
      "Internal": 36,
      "External": 58,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 50,
      "Internal": 27,
      "External": 55,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 51,
      "Internal": 25,
      "External": 54,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 52,
      "Internal": 20,
      "External": 47,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 53,
      "Internal": 38,
      "External": 59,
      "Total": 97,
      "Grade": 10
    },
    {
      "id": 54,
      "Internal": 25,
      "External": 37,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 55,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 56,
      "Internal": 20,
      "External": 55,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 57,
      "Internal": 32,
      "External": 46,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 58,
      "Internal": 29,
      "External": 48,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 59,
      "Internal": 21,
      "External": 40,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 60,
      "Internal": 33,
      "External": 48,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 61,
      "Internal": 27,
      "External": 35,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 62,
      "Internal": 30,
      "External": 45,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 63,
      "Internal": 29,
      "External": 54,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 64,
      "Internal": 35,
      "External": 49,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 65,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 66,
      "Internal": 39,
      "External": 32,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 67,
      "Internal": 37,
      "External": 30,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 68,
      "Internal": 31,
      "External": 58,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 69,
      "Internal": 33,
      "External": 37,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 70,
      "Internal": 34,
      "External": 44,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 71,
      "Internal": 22,
      "External": 46,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 72,
      "Internal": 26,
      "External": 52,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 73,
      "Internal": 32,
      "External": 30,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 74,
      "Internal": 28,
      "External": 44,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 75,
      "Internal": 30,
      "External": 48,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 76,
      "Internal": 26,
      "External": 30,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 77,
      "Internal": 35,
      "External": 54,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 78,
      "Internal": 22,
      "External": 54,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 79,
      "Internal": 32,
      "External": 50,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 80,
      "Internal": 26,
      "External": 30,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 81,
      "Internal": 35,
      "External": 57,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 82,
      "Internal": 29,
      "External": 50,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 83,
      "Internal": 37,
      "External": 35,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 84,
      "Internal": 29,
      "External": 58,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 85,
      "Internal": 29,
      "External": 36,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 86,
      "Internal": 23,
      "External": 31,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 87,
      "Internal": 34,
      "External": 56,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 88,
      "Internal": 29,
      "External": 40,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 89,
      "Internal": 22,
      "External": 51,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 90,
      "Internal": 38,
      "External": 40,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 91,
      "Internal": 27,
      "External": 44,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 92,
      "Internal": 33,
      "External": 41,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 93,
      "Internal": 30,
      "External": 33,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 94,
      "Internal": 37,
      "External": 36,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 95,
      "Internal": 28,
      "External": 52,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 96,
      "Internal": 20,
      "External": 52,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 97,
      "Internal": 34,
      "External": 44,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 98,
      "Internal": 31,
      "External": 37,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 99,
      "Internal": 39,
      "External": 52,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 100,
      "Internal": 34,
      "External": 57,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 101,
      "Internal": 36,
      "External": 52,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 102,
      "Internal": 23,
      "External": 49,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 103,
      "Internal": 39,
      "External": 42,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 104,
      "Internal": 25,
      "External": 45,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 105,
      "Internal": 29,
      "External": 34,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 106,
      "Internal": 33,
      "External": 41,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 107,
      "Internal": 28,
      "External": 57,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 108,
      "Internal": 38,
      "External": 49,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 109,
      "Internal": 37,
      "External": 43,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 110,
      "Internal": 21,
      "External": 58,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 111,
      "Internal": 32,
      "External": 47,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 112,
      "Internal": 21,
      "External": 49,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 113,
      "Internal": 29,
      "External": 58,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 114,
      "Internal": 32,
      "External": 51,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 115,
      "Internal": 34,
      "External": 48,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 116,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 117,
      "Internal": 22,
      "External": 47,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 118,
      "Internal": 38,
      "External": 46,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 119,
      "Internal": 23,
      "External": 41,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 120,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 121,
      "Internal": 29,
      "External": 52,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 122,
      "Internal": 25,
      "External": 57,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 123,
      "Internal": 36,
      "External": 41,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 124,
      "Internal": 32,
      "External": 50,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 125,
      "Internal": 35,
      "External": 53,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 126,
      "Internal": 30,
      "External": 48,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 127,
      "Internal": 37,
      "External": 47,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 128,
      "Internal": 35,
      "External": 49,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 129,
      "Internal": 29,
      "External": 50,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 130,
      "Internal": 37,
      "External": 49,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 131,
      "Internal": 25,
      "External": 42,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 132,
      "Internal": 31,
      "External": 56,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 133,
      "Internal": 34,
      "External": 57,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 134,
      "Internal": 21,
      "External": 34,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 135,
      "Internal": 30,
      "External": 43,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 136,
      "Internal": 22,
      "External": 39,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 137,
      "Internal": 20,
      "External": 56,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 138,
      "Internal": 24,
      "External": 38,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 139,
      "Internal": 39,
      "External": 38,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 140,
      "Internal": 25,
      "External": 45,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 141,
      "Internal": 30,
      "External": 56,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 142,
      "Internal": 34,
      "External": 53,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 143,
      "Internal": 37,
      "External": 44,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 144,
      "Internal": 38,
      "External": 49,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 145,
      "Internal": 27,
      "External": 48,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 146,
      "Internal": 27,
      "External": 37,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 147,
      "Internal": 31,
      "External": 39,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 148,
      "Internal": 31,
      "External": 41,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 149,
      "Internal": 21,
      "External": 34,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 150,
      "Internal": 35,
      "External": 35,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 151,
      "Internal": 23,
      "External": 48,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 152,
      "Internal": 30,
      "External": 32,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 153,
      "Internal": 24,
      "External": 43,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 154,
      "Internal": 37,
      "External": 36,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 155,
      "Internal": 35,
      "External": 35,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 156,
      "Internal": 39,
      "External": 37,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 157,
      "Internal": 35,
      "External": 42,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 158,
      "Internal": 26,
      "External": 31,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 159,
      "Internal": 25,
      "External": 32,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 160,
      "Internal": 36,
      "External": 44,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 161,
      "Internal": 38,
      "External": 56,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 162,
      "Internal": 21,
      "External": 53,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 163,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 164,
      "Internal": 22,
      "External": 43,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 165,
      "Internal": 35,
      "External": 33,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 166,
      "Internal": 39,
      "External": 40,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 167,
      "Internal": 38,
      "External": 52,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 168,
      "Internal": 32,
      "External": 55,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 169,
      "Internal": 24,
      "External": 36,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 170,
      "Internal": 39,
      "External": 52,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 171,
      "Internal": 36,
      "External": 37,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 172,
      "Internal": 27,
      "External": 48,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 173,
      "Internal": 39,
      "External": 48,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 174,
      "Internal": 26,
      "External": 43,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 175,
      "Internal": 27,
      "External": 55,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 176,
      "Internal": 27,
      "External": 39,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 177,
      "Internal": 36,
      "External": 33,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 178,
      "Internal": 24,
      "External": 40,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 179,
      "Internal": 24,
      "External": 35,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 180,
      "Internal": 33,
      "External": 33,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 181,
      "Internal": 24,
      "External": 54,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 182,
      "Internal": 37,
      "External": 58,
      "Total": 95,
      "Grade": 10
    },
    {
      "id": 183,
      "Internal": 26,
      "External": 49,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 184,
      "Internal": 20,
      "External": 32,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 185,
      "Internal": 30,
      "External": 32,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 186,
      "Internal": 35,
      "External": 38,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 187,
      "Internal": 22,
      "External": 48,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 188,
      "Internal": 21,
      "External": 54,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 189,
      "Internal": 37,
      "External": 40,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 190,
      "Internal": 34,
      "External": 35,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 191,
      "Internal": 39,
      "External": 56,
      "Total": 95,
      "Grade": 10
    },
    {
      "id": 192,
      "Internal": 33,
      "External": 35,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 193,
      "Internal": 21,
      "External": 57,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 194,
      "Internal": 39,
      "External": 44,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 195,
      "Internal": 21,
      "External": 51,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 196,
      "Internal": 38,
      "External": 37,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 197,
      "Internal": 36,
      "External": 33,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 198,
      "Internal": 35,
      "External": 49,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 199,
      "Internal": 35,
      "External": 39,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 200,
      "Internal": 32,
      "External": 43,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 201,
      "Internal": 27,
      "External": 48,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 202,
      "Internal": 33,
      "External": 33,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 203,
      "Internal": 20,
      "External": 53,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 204,
      "Internal": 27,
      "External": 56,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 205,
      "Internal": 30,
      "External": 32,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 206,
      "Internal": 29,
      "External": 43,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 207,
      "Internal": 38,
      "External": 41,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 208,
      "Internal": 23,
      "External": 55,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 209,
      "Internal": 30,
      "External": 43,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 210,
      "Internal": 30,
      "External": 56,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 211,
      "Internal": 32,
      "External": 51,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 212,
      "Internal": 29,
      "External": 33,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 213,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 214,
      "Internal": 30,
      "External": 59,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 215,
      "Internal": 20,
      "External": 43,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 216,
      "Internal": 32,
      "External": 39,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 217,
      "Internal": 34,
      "External": 55,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 218,
      "Internal": 31,
      "External": 35,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 219,
      "Internal": 20,
      "External": 34,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 220,
      "Internal": 37,
      "External": 52,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 221,
      "Internal": 20,
      "External": 44,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 222,
      "Internal": 35,
      "External": 41,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 223,
      "Internal": 29,
      "External": 48,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 224,
      "Internal": 20,
      "External": 58,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 225,
      "Internal": 39,
      "External": 37,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 226,
      "Internal": 31,
      "External": 52,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 227,
      "Internal": 24,
      "External": 58,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 228,
      "Internal": 33,
      "External": 40,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 229,
      "Internal": 27,
      "External": 57,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 230,
      "Internal": 26,
      "External": 46,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 231,
      "Internal": 35,
      "External": 35,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 232,
      "Internal": 34,
      "External": 40,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 233,
      "Internal": 20,
      "External": 54,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 234,
      "Internal": 26,
      "External": 47,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 235,
      "Internal": 21,
      "External": 45,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 236,
      "Internal": 37,
      "External": 42,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 237,
      "Internal": 39,
      "External": 30,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 238,
      "Internal": 24,
      "External": 49,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 239,
      "Internal": 29,
      "External": 35,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 240,
      "Internal": 22,
      "External": 43,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 241,
      "Internal": 39,
      "External": 35,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 242,
      "Internal": 28,
      "External": 40,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 243,
      "Internal": 29,
      "External": 40,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 244,
      "Internal": 37,
      "External": 38,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 245,
      "Internal": 30,
      "External": 49,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 246,
      "Internal": 27,
      "External": 36,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 247,
      "Internal": 26,
      "External": 48,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 248,
      "Internal": 38,
      "External": 44,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 249,
      "Internal": 29,
      "External": 44,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 250,
      "Internal": 26,
      "External": 32,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 251,
      "Internal": 23,
      "External": 31,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 252,
      "Internal": 27,
      "External": 38,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 253,
      "Internal": 34,
      "External": 33,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 254,
      "Internal": 35,
      "External": 59,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 255,
      "Internal": 37,
      "External": 56,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 256,
      "Internal": 21,
      "External": 39,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 257,
      "Internal": 32,
      "External": 39,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 258,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 259,
      "Internal": 37,
      "External": 51,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 260,
      "Internal": 34,
      "External": 36,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 261,
      "Internal": 30,
      "External": 55,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 262,
      "Internal": 35,
      "External": 47,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 263,
      "Internal": 37,
      "External": 34,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 264,
      "Internal": 37,
      "External": 31,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 265,
      "Internal": 37,
      "External": 50,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 266,
      "Internal": 29,
      "External": 36,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 267,
      "Internal": 35,
      "External": 59,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 268,
      "Internal": 37,
      "External": 50,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 269,
      "Internal": 28,
      "External": 33,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 270,
      "Internal": 36,
      "External": 35,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 271,
      "Internal": 23,
      "External": 52,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 272,
      "Internal": 29,
      "External": 34,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 273,
      "Internal": 32,
      "External": 39,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 274,
      "Internal": 39,
      "External": 39,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 275,
      "Internal": 35,
      "External": 54,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 276,
      "Internal": 32,
      "External": 43,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 277,
      "Internal": 35,
      "External": 46,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 278,
      "Internal": 22,
      "External": 59,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 279,
      "Internal": 32,
      "External": 36,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 280,
      "Internal": 22,
      "External": 45,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 281,
      "Internal": 37,
      "External": 35,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 282,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 283,
      "Internal": 32,
      "External": 50,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 284,
      "Internal": 24,
      "External": 37,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 285,
      "Internal": 33,
      "External": 47,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 286,
      "Internal": 28,
      "External": 45,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 287,
      "Internal": 36,
      "External": 48,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 288,
      "Internal": 25,
      "External": 45,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 289,
      "Internal": 39,
      "External": 34,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 290,
      "Internal": 22,
      "External": 36,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 291,
      "Internal": 23,
      "External": 30,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 292,
      "Internal": 26,
      "External": 48,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 293,
      "Internal": 30,
      "External": 57,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 294,
      "Internal": 25,
      "External": 35,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 295,
      "Internal": 32,
      "External": 42,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 296,
      "Internal": 24,
      "External": 54,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 297,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 298,
      "Internal": 36,
      "External": 50,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 299,
      "Internal": 20,
      "External": 59,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 300,
      "Internal": 38,
      "External": 59,
      "Total": 97,
      "Grade": 10
    },
    {
      "id": 301,
      "Internal": 28,
      "External": 34,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 302,
      "Internal": 20,
      "External": 44,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 303,
      "Internal": 37,
      "External": 37,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 304,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 305,
      "Internal": 29,
      "External": 46,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 306,
      "Internal": 24,
      "External": 49,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 307,
      "Internal": 27,
      "External": 46,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 308,
      "Internal": 32,
      "External": 38,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 309,
      "Internal": 25,
      "External": 38,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 310,
      "Internal": 39,
      "External": 51,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 311,
      "Internal": 25,
      "External": 51,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 312,
      "Internal": 39,
      "External": 49,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 313,
      "Internal": 22,
      "External": 34,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 314,
      "Internal": 27,
      "External": 44,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 315,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 316,
      "Internal": 21,
      "External": 52,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 317,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 318,
      "Internal": 29,
      "External": 58,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 319,
      "Internal": 23,
      "External": 46,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 320,
      "Internal": 26,
      "External": 37,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 321,
      "Internal": 38,
      "External": 36,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 322,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 323,
      "Internal": 27,
      "External": 52,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 324,
      "Internal": 33,
      "External": 33,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 325,
      "Internal": 20,
      "External": 50,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 326,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 327,
      "Internal": 29,
      "External": 54,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 328,
      "Internal": 30,
      "External": 43,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 329,
      "Internal": 32,
      "External": 33,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 330,
      "Internal": 28,
      "External": 52,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 331,
      "Internal": 30,
      "External": 50,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 332,
      "Internal": 23,
      "External": 37,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 333,
      "Internal": 23,
      "External": 33,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 334,
      "Internal": 38,
      "External": 46,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 335,
      "Internal": 33,
      "External": 37,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 336,
      "Internal": 37,
      "External": 40,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 337,
      "Internal": 38,
      "External": 59,
      "Total": 97,
      "Grade": 10
    },
    {
      "id": 338,
      "Internal": 36,
      "External": 38,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 339,
      "Internal": 29,
      "External": 38,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 340,
      "Internal": 25,
      "External": 55,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 341,
      "Internal": 29,
      "External": 42,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 342,
      "Internal": 22,
      "External": 43,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 343,
      "Internal": 27,
      "External": 56,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 344,
      "Internal": 39,
      "External": 33,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 345,
      "Internal": 26,
      "External": 52,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 346,
      "Internal": 29,
      "External": 51,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 347,
      "Internal": 25,
      "External": 37,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 348,
      "Internal": 25,
      "External": 30,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 349,
      "Internal": 27,
      "External": 56,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 350,
      "Internal": 39,
      "External": 34,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 351,
      "Internal": 39,
      "External": 36,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 352,
      "Internal": 28,
      "External": 51,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 353,
      "Internal": 27,
      "External": 31,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 354,
      "Internal": 24,
      "External": 30,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 355,
      "Internal": 29,
      "External": 54,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 356,
      "Internal": 22,
      "External": 46,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 357,
      "Internal": 22,
      "External": 58,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 358,
      "Internal": 23,
      "External": 43,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 359,
      "Internal": 32,
      "External": 52,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 360,
      "Internal": 21,
      "External": 43,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 361,
      "Internal": 27,
      "External": 36,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 362,
      "Internal": 25,
      "External": 54,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 363,
      "Internal": 37,
      "External": 44,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 364,
      "Internal": 38,
      "External": 30,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 365,
      "Internal": 25,
      "External": 30,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 366,
      "Internal": 33,
      "External": 55,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 367,
      "Internal": 28,
      "External": 40,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 368,
      "Internal": 36,
      "External": 50,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 369,
      "Internal": 21,
      "External": 37,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 370,
      "Internal": 24,
      "External": 49,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 371,
      "Internal": 23,
      "External": 30,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 372,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 373,
      "Internal": 26,
      "External": 41,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 374,
      "Internal": 37,
      "External": 59,
      "Total": 96,
      "Grade": 10
    },
    {
      "id": 375,
      "Internal": 34,
      "External": 35,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 376,
      "Internal": 22,
      "External": 44,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 377,
      "Internal": 26,
      "External": 33,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 378,
      "Internal": 21,
      "External": 44,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 379,
      "Internal": 29,
      "External": 56,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 380,
      "Internal": 28,
      "External": 42,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 381,
      "Internal": 25,
      "External": 54,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 382,
      "Internal": 23,
      "External": 54,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 383,
      "Internal": 20,
      "External": 56,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 384,
      "Internal": 22,
      "External": 44,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 385,
      "Internal": 25,
      "External": 59,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 386,
      "Internal": 39,
      "External": 56,
      "Total": 95,
      "Grade": 10
    },
    {
      "id": 387,
      "Internal": 31,
      "External": 31,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 388,
      "Internal": 37,
      "External": 54,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 389,
      "Internal": 22,
      "External": 44,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 390,
      "Internal": 27,
      "External": 48,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 391,
      "Internal": 39,
      "External": 33,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 392,
      "Internal": 25,
      "External": 55,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 393,
      "Internal": 28,
      "External": 39,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 394,
      "Internal": 32,
      "External": 37,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 395,
      "Internal": 34,
      "External": 58,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 396,
      "Internal": 34,
      "External": 48,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 397,
      "Internal": 26,
      "External": 44,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 398,
      "Internal": 38,
      "External": 47,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 399,
      "Internal": 26,
      "External": 51,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 400,
      "Internal": 37,
      "External": 39,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 401,
      "Internal": 25,
      "External": 41,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 402,
      "Internal": 37,
      "External": 57,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 403,
      "Internal": 34,
      "External": 58,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 404,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 405,
      "Internal": 23,
      "External": 56,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 406,
      "Internal": 20,
      "External": 41,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 407,
      "Internal": 28,
      "External": 52,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 408,
      "Internal": 31,
      "External": 49,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 409,
      "Internal": 37,
      "External": 41,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 410,
      "Internal": 30,
      "External": 39,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 411,
      "Internal": 30,
      "External": 35,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 412,
      "Internal": 30,
      "External": 35,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 413,
      "Internal": 34,
      "External": 55,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 414,
      "Internal": 31,
      "External": 53,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 415,
      "Internal": 24,
      "External": 44,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 416,
      "Internal": 35,
      "External": 34,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 417,
      "Internal": 38,
      "External": 55,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 418,
      "Internal": 24,
      "External": 37,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 419,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 420,
      "Internal": 31,
      "External": 32,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 421,
      "Internal": 33,
      "External": 40,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 422,
      "Internal": 26,
      "External": 32,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 423,
      "Internal": 20,
      "External": 48,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 424,
      "Internal": 29,
      "External": 33,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 425,
      "Internal": 33,
      "External": 42,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 426,
      "Internal": 24,
      "External": 55,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 427,
      "Internal": 34,
      "External": 34,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 428,
      "Internal": 32,
      "External": 46,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 429,
      "Internal": 35,
      "External": 47,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 430,
      "Internal": 35,
      "External": 30,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 431,
      "Internal": 27,
      "External": 34,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 432,
      "Internal": 27,
      "External": 38,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 433,
      "Internal": 27,
      "External": 42,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 434,
      "Internal": 29,
      "External": 43,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 435,
      "Internal": 34,
      "External": 45,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 436,
      "Internal": 27,
      "External": 39,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 437,
      "Internal": 26,
      "External": 31,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 438,
      "Internal": 25,
      "External": 44,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 439,
      "Internal": 35,
      "External": 41,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 440,
      "Internal": 30,
      "External": 51,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 441,
      "Internal": 22,
      "External": 52,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 442,
      "Internal": 25,
      "External": 38,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 443,
      "Internal": 39,
      "External": 34,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 444,
      "Internal": 20,
      "External": 59,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 445,
      "Internal": 33,
      "External": 53,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 446,
      "Internal": 33,
      "External": 58,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 447,
      "Internal": 29,
      "External": 55,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 448,
      "Internal": 21,
      "External": 33,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 449,
      "Internal": 21,
      "External": 58,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 450,
      "Internal": 31,
      "External": 56,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 451,
      "Internal": 35,
      "External": 35,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 452,
      "Internal": 31,
      "External": 50,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 453,
      "Internal": 24,
      "External": 32,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 454,
      "Internal": 36,
      "External": 30,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 455,
      "Internal": 26,
      "External": 30,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 456,
      "Internal": 34,
      "External": 57,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 457,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 458,
      "Internal": 25,
      "External": 36,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 459,
      "Internal": 29,
      "External": 31,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 460,
      "Internal": 30,
      "External": 46,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 461,
      "Internal": 35,
      "External": 40,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 462,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 463,
      "Internal": 26,
      "External": 44,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 464,
      "Internal": 36,
      "External": 41,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 465,
      "Internal": 28,
      "External": 37,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 466,
      "Internal": 30,
      "External": 46,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 467,
      "Internal": 35,
      "External": 50,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 468,
      "Internal": 35,
      "External": 41,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 469,
      "Internal": 36,
      "External": 42,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 470,
      "Internal": 33,
      "External": 44,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 471,
      "Internal": 32,
      "External": 50,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 472,
      "Internal": 30,
      "External": 44,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 473,
      "Internal": 32,
      "External": 45,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 474,
      "Internal": 20,
      "External": 45,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 475,
      "Internal": 39,
      "External": 40,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 476,
      "Internal": 37,
      "External": 46,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 477,
      "Internal": 37,
      "External": 53,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 478,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 479,
      "Internal": 37,
      "External": 38,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 480,
      "Internal": 38,
      "External": 47,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 481,
      "Internal": 28,
      "External": 44,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 482,
      "Internal": 26,
      "External": 40,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 483,
      "Internal": 38,
      "External": 49,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 484,
      "Internal": 35,
      "External": 37,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 485,
      "Internal": 36,
      "External": 31,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 486,
      "Internal": 34,
      "External": 57,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 487,
      "Internal": 28,
      "External": 51,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 488,
      "Internal": 34,
      "External": 34,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 489,
      "Internal": 20,
      "External": 42,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 490,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 491,
      "Internal": 20,
      "External": 54,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 492,
      "Internal": 37,
      "External": 33,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 493,
      "Internal": 24,
      "External": 43,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 494,
      "Internal": 26,
      "External": 45,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 495,
      "Internal": 35,
      "External": 52,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 496,
      "Internal": 23,
      "External": 48,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 497,
      "Internal": 27,
      "External": 50,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 498,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 499,
      "Internal": 36,
      "External": 56,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 500,
      "Internal": 36,
      "External": 53,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 501,
      "Internal": 25,
      "External": 30,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 502,
      "Internal": 32,
      "External": 43,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 503,
      "Internal": 32,
      "External": 52,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 504,
      "Internal": 32,
      "External": 39,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 505,
      "Internal": 20,
      "External": 48,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 506,
      "Internal": 26,
      "External": 51,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 507,
      "Internal": 21,
      "External": 54,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 508,
      "Internal": 36,
      "External": 42,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 509,
      "Internal": 28,
      "External": 32,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 510,
      "Internal": 29,
      "External": 41,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 511,
      "Internal": 24,
      "External": 53,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 512,
      "Internal": 29,
      "External": 50,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 513,
      "Internal": 32,
      "External": 57,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 514,
      "Internal": 20,
      "External": 31,
      "Total": 51,
      "Grade": 4
    },
    {
      "id": 515,
      "Internal": 31,
      "External": 53,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 516,
      "Internal": 28,
      "External": 56,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 517,
      "Internal": 31,
      "External": 32,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 518,
      "Internal": 29,
      "External": 30,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 519,
      "Internal": 22,
      "External": 36,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 520,
      "Internal": 20,
      "External": 47,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 521,
      "Internal": 39,
      "External": 30,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 522,
      "Internal": 30,
      "External": 39,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 523,
      "Internal": 39,
      "External": 40,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 524,
      "Internal": 22,
      "External": 46,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 525,
      "Internal": 36,
      "External": 44,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 526,
      "Internal": 35,
      "External": 49,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 527,
      "Internal": 25,
      "External": 43,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 528,
      "Internal": 34,
      "External": 40,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 529,
      "Internal": 21,
      "External": 48,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 530,
      "Internal": 28,
      "External": 36,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 531,
      "Internal": 38,
      "External": 32,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 532,
      "Internal": 38,
      "External": 53,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 533,
      "Internal": 29,
      "External": 43,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 534,
      "Internal": 34,
      "External": 52,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 535,
      "Internal": 26,
      "External": 40,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 536,
      "Internal": 36,
      "External": 35,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 537,
      "Internal": 39,
      "External": 45,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 538,
      "Internal": 32,
      "External": 38,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 539,
      "Internal": 34,
      "External": 42,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 540,
      "Internal": 38,
      "External": 38,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 541,
      "Internal": 21,
      "External": 52,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 542,
      "Internal": 29,
      "External": 49,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 543,
      "Internal": 34,
      "External": 36,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 544,
      "Internal": 38,
      "External": 55,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 545,
      "Internal": 26,
      "External": 46,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 546,
      "Internal": 28,
      "External": 53,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 547,
      "Internal": 30,
      "External": 59,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 548,
      "Internal": 24,
      "External": 31,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 549,
      "Internal": 33,
      "External": 42,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 550,
      "Internal": 31,
      "External": 31,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 551,
      "Internal": 22,
      "External": 57,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 552,
      "Internal": 39,
      "External": 34,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 553,
      "Internal": 36,
      "External": 51,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 554,
      "Internal": 25,
      "External": 30,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 555,
      "Internal": 27,
      "External": 35,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 556,
      "Internal": 29,
      "External": 51,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 557,
      "Internal": 35,
      "External": 30,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 558,
      "Internal": 25,
      "External": 50,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 559,
      "Internal": 29,
      "External": 53,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 560,
      "Internal": 31,
      "External": 32,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 561,
      "Internal": 34,
      "External": 36,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 562,
      "Internal": 35,
      "External": 47,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 563,
      "Internal": 37,
      "External": 43,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 564,
      "Internal": 28,
      "External": 56,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 565,
      "Internal": 33,
      "External": 46,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 566,
      "Internal": 26,
      "External": 34,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 567,
      "Internal": 37,
      "External": 47,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 568,
      "Internal": 24,
      "External": 41,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 569,
      "Internal": 21,
      "External": 43,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 570,
      "Internal": 34,
      "External": 41,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 571,
      "Internal": 30,
      "External": 38,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 572,
      "Internal": 21,
      "External": 50,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 573,
      "Internal": 20,
      "External": 52,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 574,
      "Internal": 20,
      "External": 33,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 575,
      "Internal": 27,
      "External": 32,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 576,
      "Internal": 32,
      "External": 39,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 577,
      "Internal": 28,
      "External": 48,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 578,
      "Internal": 36,
      "External": 33,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 579,
      "Internal": 28,
      "External": 32,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 580,
      "Internal": 30,
      "External": 33,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 581,
      "Internal": 26,
      "External": 44,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 582,
      "Internal": 20,
      "External": 49,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 583,
      "Internal": 32,
      "External": 34,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 584,
      "Internal": 27,
      "External": 31,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 585,
      "Internal": 26,
      "External": 38,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 586,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 587,
      "Internal": 20,
      "External": 38,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 588,
      "Internal": 20,
      "External": 44,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 589,
      "Internal": 27,
      "External": 57,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 590,
      "Internal": 31,
      "External": 41,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 591,
      "Internal": 37,
      "External": 53,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 592,
      "Internal": 36,
      "External": 36,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 593,
      "Internal": 24,
      "External": 56,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 594,
      "Internal": 36,
      "External": 37,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 595,
      "Internal": 24,
      "External": 47,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 596,
      "Internal": 31,
      "External": 47,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 597,
      "Internal": 32,
      "External": 46,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 598,
      "Internal": 39,
      "External": 55,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 599,
      "Internal": 23,
      "External": 30,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 600,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 601,
      "Internal": 21,
      "External": 43,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 602,
      "Internal": 39,
      "External": 47,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 603,
      "Internal": 22,
      "External": 48,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 604,
      "Internal": 30,
      "External": 30,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 605,
      "Internal": 31,
      "External": 49,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 606,
      "Internal": 38,
      "External": 36,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 607,
      "Internal": 35,
      "External": 46,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 608,
      "Internal": 30,
      "External": 30,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 609,
      "Internal": 30,
      "External": 35,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 610,
      "Internal": 34,
      "External": 55,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 611,
      "Internal": 36,
      "External": 35,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 612,
      "Internal": 26,
      "External": 59,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 613,
      "Internal": 31,
      "External": 48,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 614,
      "Internal": 38,
      "External": 39,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 615,
      "Internal": 28,
      "External": 34,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 616,
      "Internal": 30,
      "External": 32,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 617,
      "Internal": 27,
      "External": 58,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 618,
      "Internal": 37,
      "External": 51,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 619,
      "Internal": 33,
      "External": 45,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 620,
      "Internal": 21,
      "External": 35,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 621,
      "Internal": 22,
      "External": 42,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 622,
      "Internal": 26,
      "External": 59,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 623,
      "Internal": 27,
      "External": 40,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 624,
      "Internal": 20,
      "External": 44,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 625,
      "Internal": 38,
      "External": 48,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 626,
      "Internal": 34,
      "External": 38,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 627,
      "Internal": 21,
      "External": 32,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 628,
      "Internal": 22,
      "External": 30,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 629,
      "Internal": 33,
      "External": 48,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 630,
      "Internal": 28,
      "External": 45,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 631,
      "Internal": 27,
      "External": 46,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 632,
      "Internal": 37,
      "External": 56,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 633,
      "Internal": 37,
      "External": 35,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 634,
      "Internal": 28,
      "External": 38,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 635,
      "Internal": 23,
      "External": 51,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 636,
      "Internal": 22,
      "External": 54,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 637,
      "Internal": 36,
      "External": 41,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 638,
      "Internal": 37,
      "External": 56,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 639,
      "Internal": 28,
      "External": 43,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 640,
      "Internal": 21,
      "External": 46,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 641,
      "Internal": 25,
      "External": 56,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 642,
      "Internal": 24,
      "External": 54,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 643,
      "Internal": 38,
      "External": 59,
      "Total": 97,
      "Grade": 10
    },
    {
      "id": 644,
      "Internal": 38,
      "External": 36,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 645,
      "Internal": 20,
      "External": 36,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 646,
      "Internal": 31,
      "External": 48,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 647,
      "Internal": 20,
      "External": 32,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 648,
      "Internal": 39,
      "External": 59,
      "Total": 98,
      "Grade": 10
    },
    {
      "id": 649,
      "Internal": 25,
      "External": 43,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 650,
      "Internal": 29,
      "External": 56,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 651,
      "Internal": 21,
      "External": 49,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 652,
      "Internal": 37,
      "External": 55,
      "Total": 92,
      "Grade": 10
    },
    {
      "id": 653,
      "Internal": 25,
      "External": 32,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 654,
      "Internal": 20,
      "External": 45,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 655,
      "Internal": 33,
      "External": 35,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 656,
      "Internal": 22,
      "External": 44,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 657,
      "Internal": 25,
      "External": 38,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 658,
      "Internal": 39,
      "External": 37,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 659,
      "Internal": 35,
      "External": 39,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 660,
      "Internal": 33,
      "External": 55,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 661,
      "Internal": 21,
      "External": 44,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 662,
      "Internal": 37,
      "External": 56,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 663,
      "Internal": 38,
      "External": 44,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 664,
      "Internal": 23,
      "External": 37,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 665,
      "Internal": 33,
      "External": 53,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 666,
      "Internal": 21,
      "External": 31,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 667,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 668,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 669,
      "Internal": 26,
      "External": 35,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 670,
      "Internal": 25,
      "External": 56,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 671,
      "Internal": 37,
      "External": 51,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 672,
      "Internal": 21,
      "External": 36,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 673,
      "Internal": 29,
      "External": 51,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 674,
      "Internal": 32,
      "External": 40,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 675,
      "Internal": 20,
      "External": 47,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 676,
      "Internal": 30,
      "External": 31,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 677,
      "Internal": 34,
      "External": 30,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 678,
      "Internal": 21,
      "External": 40,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 679,
      "Internal": 38,
      "External": 35,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 680,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 681,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 682,
      "Internal": 34,
      "External": 35,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 683,
      "Internal": 34,
      "External": 51,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 684,
      "Internal": 25,
      "External": 47,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 685,
      "Internal": 28,
      "External": 55,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 686,
      "Internal": 36,
      "External": 55,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 687,
      "Internal": 30,
      "External": 38,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 688,
      "Internal": 20,
      "External": 33,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 689,
      "Internal": 32,
      "External": 41,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 690,
      "Internal": 20,
      "External": 35,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 691,
      "Internal": 28,
      "External": 35,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 692,
      "Internal": 28,
      "External": 43,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 693,
      "Internal": 27,
      "External": 43,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 694,
      "Internal": 33,
      "External": 35,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 695,
      "Internal": 27,
      "External": 35,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 696,
      "Internal": 28,
      "External": 42,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 697,
      "Internal": 27,
      "External": 55,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 698,
      "Internal": 34,
      "External": 46,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 699,
      "Internal": 32,
      "External": 42,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 700,
      "Internal": 27,
      "External": 52,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 701,
      "Internal": 21,
      "External": 32,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 702,
      "Internal": 27,
      "External": 56,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 703,
      "Internal": 31,
      "External": 44,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 704,
      "Internal": 28,
      "External": 35,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 705,
      "Internal": 20,
      "External": 49,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 706,
      "Internal": 32,
      "External": 49,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 707,
      "Internal": 30,
      "External": 31,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 708,
      "Internal": 30,
      "External": 46,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 709,
      "Internal": 22,
      "External": 30,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 710,
      "Internal": 35,
      "External": 46,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 711,
      "Internal": 37,
      "External": 37,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 712,
      "Internal": 20,
      "External": 56,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 713,
      "Internal": 20,
      "External": 33,
      "Total": 53,
      "Grade": 4
    },
    {
      "id": 714,
      "Internal": 36,
      "External": 45,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 715,
      "Internal": 27,
      "External": 39,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 716,
      "Internal": 28,
      "External": 53,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 717,
      "Internal": 22,
      "External": 56,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 718,
      "Internal": 39,
      "External": 35,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 719,
      "Internal": 23,
      "External": 57,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 720,
      "Internal": 38,
      "External": 42,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 721,
      "Internal": 32,
      "External": 49,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 722,
      "Internal": 27,
      "External": 49,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 723,
      "Internal": 33,
      "External": 48,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 724,
      "Internal": 22,
      "External": 47,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 725,
      "Internal": 22,
      "External": 30,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 726,
      "Internal": 28,
      "External": 50,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 727,
      "Internal": 39,
      "External": 39,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 728,
      "Internal": 27,
      "External": 54,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 729,
      "Internal": 24,
      "External": 47,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 730,
      "Internal": 23,
      "External": 52,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 731,
      "Internal": 37,
      "External": 44,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 732,
      "Internal": 34,
      "External": 57,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 733,
      "Internal": 21,
      "External": 36,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 734,
      "Internal": 32,
      "External": 49,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 735,
      "Internal": 26,
      "External": 42,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 736,
      "Internal": 30,
      "External": 59,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 737,
      "Internal": 33,
      "External": 39,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 738,
      "Internal": 31,
      "External": 33,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 739,
      "Internal": 20,
      "External": 51,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 740,
      "Internal": 28,
      "External": 53,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 741,
      "Internal": 32,
      "External": 32,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 742,
      "Internal": 20,
      "External": 52,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 743,
      "Internal": 39,
      "External": 42,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 744,
      "Internal": 38,
      "External": 56,
      "Total": 94,
      "Grade": 10
    },
    {
      "id": 745,
      "Internal": 39,
      "External": 47,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 746,
      "Internal": 27,
      "External": 59,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 747,
      "Internal": 31,
      "External": 55,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 748,
      "Internal": 37,
      "External": 40,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 749,
      "Internal": 34,
      "External": 38,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 750,
      "Internal": 25,
      "External": 42,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 751,
      "Internal": 28,
      "External": 40,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 752,
      "Internal": 20,
      "External": 41,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 753,
      "Internal": 35,
      "External": 43,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 754,
      "Internal": 36,
      "External": 38,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 755,
      "Internal": 36,
      "External": 57,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 756,
      "Internal": 29,
      "External": 54,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 757,
      "Internal": 28,
      "External": 39,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 758,
      "Internal": 30,
      "External": 47,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 759,
      "Internal": 26,
      "External": 57,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 760,
      "Internal": 20,
      "External": 50,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 761,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 762,
      "Internal": 28,
      "External": 42,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 763,
      "Internal": 24,
      "External": 38,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 764,
      "Internal": 22,
      "External": 32,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 765,
      "Internal": 31,
      "External": 38,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 766,
      "Internal": 27,
      "External": 54,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 767,
      "Internal": 34,
      "External": 42,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 768,
      "Internal": 26,
      "External": 53,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 769,
      "Internal": 23,
      "External": 45,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 770,
      "Internal": 34,
      "External": 47,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 771,
      "Internal": 26,
      "External": 47,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 772,
      "Internal": 36,
      "External": 33,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 773,
      "Internal": 32,
      "External": 52,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 774,
      "Internal": 36,
      "External": 38,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 775,
      "Internal": 26,
      "External": 35,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 776,
      "Internal": 24,
      "External": 50,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 777,
      "Internal": 27,
      "External": 43,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 778,
      "Internal": 33,
      "External": 32,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 779,
      "Internal": 39,
      "External": 39,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 780,
      "Internal": 35,
      "External": 34,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 781,
      "Internal": 31,
      "External": 34,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 782,
      "Internal": 32,
      "External": 59,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 783,
      "Internal": 21,
      "External": 39,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 784,
      "Internal": 24,
      "External": 56,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 785,
      "Internal": 35,
      "External": 34,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 786,
      "Internal": 32,
      "External": 58,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 787,
      "Internal": 28,
      "External": 46,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 788,
      "Internal": 28,
      "External": 44,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 789,
      "Internal": 38,
      "External": 51,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 790,
      "Internal": 27,
      "External": 58,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 791,
      "Internal": 28,
      "External": 35,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 792,
      "Internal": 23,
      "External": 35,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 793,
      "Internal": 37,
      "External": 36,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 794,
      "Internal": 20,
      "External": 43,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 795,
      "Internal": 23,
      "External": 53,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 796,
      "Internal": 29,
      "External": 42,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 797,
      "Internal": 25,
      "External": 58,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 798,
      "Internal": 31,
      "External": 46,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 799,
      "Internal": 22,
      "External": 54,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 800,
      "Internal": 32,
      "External": 52,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 801,
      "Internal": 23,
      "External": 40,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 802,
      "Internal": 31,
      "External": 43,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 803,
      "Internal": 31,
      "External": 31,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 804,
      "Internal": 27,
      "External": 32,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 805,
      "Internal": 30,
      "External": 34,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 806,
      "Internal": 36,
      "External": 34,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 807,
      "Internal": 33,
      "External": 32,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 808,
      "Internal": 23,
      "External": 57,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 809,
      "Internal": 22,
      "External": 37,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 810,
      "Internal": 38,
      "External": 31,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 811,
      "Internal": 28,
      "External": 49,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 812,
      "Internal": 34,
      "External": 40,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 813,
      "Internal": 31,
      "External": 36,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 814,
      "Internal": 33,
      "External": 38,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 815,
      "Internal": 35,
      "External": 58,
      "Total": 93,
      "Grade": 10
    },
    {
      "id": 816,
      "Internal": 24,
      "External": 30,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 817,
      "Internal": 30,
      "External": 37,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 818,
      "Internal": 35,
      "External": 31,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 819,
      "Internal": 39,
      "External": 41,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 820,
      "Internal": 32,
      "External": 53,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 821,
      "Internal": 36,
      "External": 32,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 822,
      "Internal": 28,
      "External": 34,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 823,
      "Internal": 30,
      "External": 47,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 824,
      "Internal": 20,
      "External": 40,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 825,
      "Internal": 25,
      "External": 56,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 826,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 827,
      "Internal": 28,
      "External": 33,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 828,
      "Internal": 38,
      "External": 36,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 829,
      "Internal": 28,
      "External": 48,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 830,
      "Internal": 31,
      "External": 46,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 831,
      "Internal": 35,
      "External": 30,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 832,
      "Internal": 30,
      "External": 50,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 833,
      "Internal": 29,
      "External": 59,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 834,
      "Internal": 23,
      "External": 46,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 835,
      "Internal": 28,
      "External": 54,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 836,
      "Internal": 33,
      "External": 43,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 837,
      "Internal": 27,
      "External": 42,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 838,
      "Internal": 25,
      "External": 53,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 839,
      "Internal": 39,
      "External": 32,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 840,
      "Internal": 35,
      "External": 52,
      "Total": 87,
      "Grade": 9
    },
    {
      "id": 841,
      "Internal": 32,
      "External": 45,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 842,
      "Internal": 30,
      "External": 45,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 843,
      "Internal": 33,
      "External": 44,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 844,
      "Internal": 29,
      "External": 43,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 845,
      "Internal": 25,
      "External": 56,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 846,
      "Internal": 32,
      "External": 41,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 847,
      "Internal": 36,
      "External": 46,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 848,
      "Internal": 23,
      "External": 41,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 849,
      "Internal": 26,
      "External": 39,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 850,
      "Internal": 38,
      "External": 52,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 851,
      "Internal": 34,
      "External": 49,
      "Total": 83,
      "Grade": 8
    },
    {
      "id": 852,
      "Internal": 36,
      "External": 49,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 853,
      "Internal": 20,
      "External": 42,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 854,
      "Internal": 32,
      "External": 33,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 855,
      "Internal": 23,
      "External": 57,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 856,
      "Internal": 29,
      "External": 33,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 857,
      "Internal": 24,
      "External": 31,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 858,
      "Internal": 22,
      "External": 53,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 859,
      "Internal": 21,
      "External": 40,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 860,
      "Internal": 28,
      "External": 45,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 861,
      "Internal": 37,
      "External": 42,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 862,
      "Internal": 28,
      "External": 35,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 863,
      "Internal": 22,
      "External": 30,
      "Total": 52,
      "Grade": 4
    },
    {
      "id": 864,
      "Internal": 32,
      "External": 43,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 865,
      "Internal": 28,
      "External": 45,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 866,
      "Internal": 26,
      "External": 44,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 867,
      "Internal": 38,
      "External": 37,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 868,
      "Internal": 34,
      "External": 31,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 869,
      "Internal": 24,
      "External": 55,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 870,
      "Internal": 35,
      "External": 33,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 871,
      "Internal": 28,
      "External": 42,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 872,
      "Internal": 21,
      "External": 33,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 873,
      "Internal": 31,
      "External": 47,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 874,
      "Internal": 29,
      "External": 48,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 875,
      "Internal": 32,
      "External": 42,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 876,
      "Internal": 38,
      "External": 30,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 877,
      "Internal": 31,
      "External": 54,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 878,
      "Internal": 37,
      "External": 42,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 879,
      "Internal": 25,
      "External": 33,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 880,
      "Internal": 37,
      "External": 44,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 881,
      "Internal": 37,
      "External": 52,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 882,
      "Internal": 37,
      "External": 38,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 883,
      "Internal": 28,
      "External": 35,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 884,
      "Internal": 30,
      "External": 38,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 885,
      "Internal": 31,
      "External": 51,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 886,
      "Internal": 23,
      "External": 36,
      "Total": 59,
      "Grade": 4
    },
    {
      "id": 887,
      "Internal": 22,
      "External": 57,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 888,
      "Internal": 22,
      "External": 46,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 889,
      "Internal": 22,
      "External": 38,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 890,
      "Internal": 24,
      "External": 54,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 891,
      "Internal": 34,
      "External": 52,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 892,
      "Internal": 24,
      "External": 48,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 893,
      "Internal": 26,
      "External": 30,
      "Total": 56,
      "Grade": 4
    },
    {
      "id": 894,
      "Internal": 34,
      "External": 51,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 895,
      "Internal": 35,
      "External": 44,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 896,
      "Internal": 38,
      "External": 33,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 897,
      "Internal": 35,
      "External": 51,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 898,
      "Internal": 21,
      "External": 55,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 899,
      "Internal": 21,
      "External": 48,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 900,
      "Internal": 33,
      "External": 52,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 901,
      "Internal": 23,
      "External": 59,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 902,
      "Internal": 39,
      "External": 39,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 903,
      "Internal": 38,
      "External": 42,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 904,
      "Internal": 24,
      "External": 53,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 905,
      "Internal": 35,
      "External": 39,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 906,
      "Internal": 33,
      "External": 51,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 907,
      "Internal": 39,
      "External": 46,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 908,
      "Internal": 28,
      "External": 44,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 909,
      "Internal": 39,
      "External": 50,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 910,
      "Internal": 20,
      "External": 40,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 911,
      "Internal": 25,
      "External": 55,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 912,
      "Internal": 37,
      "External": 53,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 913,
      "Internal": 38,
      "External": 59,
      "Total": 97,
      "Grade": 10
    },
    {
      "id": 914,
      "Internal": 20,
      "External": 46,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 915,
      "Internal": 36,
      "External": 34,
      "Total": 70,
      "Grade": 6
    },
    {
      "id": 916,
      "Internal": 31,
      "External": 47,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 917,
      "Internal": 29,
      "External": 38,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 918,
      "Internal": 33,
      "External": 47,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 919,
      "Internal": 27,
      "External": 55,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 920,
      "Internal": 31,
      "External": 55,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 921,
      "Internal": 39,
      "External": 43,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 922,
      "Internal": 35,
      "External": 56,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 923,
      "Internal": 37,
      "External": 53,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 924,
      "Internal": 39,
      "External": 41,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 925,
      "Internal": 21,
      "External": 44,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 926,
      "Internal": 24,
      "External": 33,
      "Total": 57,
      "Grade": 4
    },
    {
      "id": 927,
      "Internal": 32,
      "External": 50,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 928,
      "Internal": 33,
      "External": 41,
      "Total": 74,
      "Grade": 6
    },
    {
      "id": 929,
      "Internal": 21,
      "External": 42,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 930,
      "Internal": 27,
      "External": 31,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 931,
      "Internal": 26,
      "External": 38,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 932,
      "Internal": 30,
      "External": 59,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 933,
      "Internal": 30,
      "External": 50,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 934,
      "Internal": 34,
      "External": 32,
      "Total": 66,
      "Grade": 5
    },
    {
      "id": 935,
      "Internal": 24,
      "External": 44,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 936,
      "Internal": 27,
      "External": 50,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 937,
      "Internal": 35,
      "External": 45,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 938,
      "Internal": 26,
      "External": 59,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 939,
      "Internal": 33,
      "External": 30,
      "Total": 63,
      "Grade": 4
    },
    {
      "id": 940,
      "Internal": 30,
      "External": 38,
      "Total": 68,
      "Grade": 5
    },
    {
      "id": 941,
      "Internal": 29,
      "External": 56,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 942,
      "Internal": 36,
      "External": 39,
      "Total": 75,
      "Grade": 7
    },
    {
      "id": 943,
      "Internal": 25,
      "External": 33,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 944,
      "Internal": 36,
      "External": 54,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 945,
      "Internal": 24,
      "External": 41,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 946,
      "Internal": 28,
      "External": 53,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 947,
      "Internal": 26,
      "External": 55,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 948,
      "Internal": 28,
      "External": 34,
      "Total": 62,
      "Grade": 4
    },
    {
      "id": 949,
      "Internal": 29,
      "External": 31,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 950,
      "Internal": 36,
      "External": 53,
      "Total": 89,
      "Grade": 9
    },
    {
      "id": 951,
      "Internal": 31,
      "External": 42,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 952,
      "Internal": 24,
      "External": 30,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 953,
      "Internal": 39,
      "External": 43,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 954,
      "Internal": 25,
      "External": 35,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 955,
      "Internal": 23,
      "External": 59,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 956,
      "Internal": 38,
      "External": 58,
      "Total": 96,
      "Grade": 10
    },
    {
      "id": 957,
      "Internal": 20,
      "External": 52,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 958,
      "Internal": 30,
      "External": 56,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 959,
      "Internal": 30,
      "External": 55,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 960,
      "Internal": 32,
      "External": 40,
      "Total": 72,
      "Grade": 6
    },
    {
      "id": 961,
      "Internal": 28,
      "External": 57,
      "Total": 85,
      "Grade": 9
    },
    {
      "id": 962,
      "Internal": 28,
      "External": 58,
      "Total": 86,
      "Grade": 9
    },
    {
      "id": 963,
      "Internal": 21,
      "External": 50,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 964,
      "Internal": 31,
      "External": 38,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 965,
      "Internal": 34,
      "External": 39,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 966,
      "Internal": 29,
      "External": 47,
      "Total": 76,
      "Grade": 7
    },
    {
      "id": 967,
      "Internal": 32,
      "External": 49,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 968,
      "Internal": 26,
      "External": 39,
      "Total": 65,
      "Grade": 5
    },
    {
      "id": 969,
      "Internal": 26,
      "External": 32,
      "Total": 58,
      "Grade": 4
    },
    {
      "id": 970,
      "Internal": 32,
      "External": 59,
      "Total": 91,
      "Grade": 10
    },
    {
      "id": 971,
      "Internal": 30,
      "External": 51,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 972,
      "Internal": 33,
      "External": 38,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 973,
      "Internal": 22,
      "External": 39,
      "Total": 61,
      "Grade": 4
    },
    {
      "id": 974,
      "Internal": 32,
      "External": 32,
      "Total": 64,
      "Grade": 5
    },
    {
      "id": 975,
      "Internal": 29,
      "External": 59,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 976,
      "Internal": 29,
      "External": 42,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 977,
      "Internal": 37,
      "External": 34,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 978,
      "Internal": 23,
      "External": 58,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 979,
      "Internal": 39,
      "External": 38,
      "Total": 77,
      "Grade": 7
    },
    {
      "id": 980,
      "Internal": 32,
      "External": 49,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 981,
      "Internal": 23,
      "External": 31,
      "Total": 54,
      "Grade": 4
    },
    {
      "id": 982,
      "Internal": 39,
      "External": 40,
      "Total": 79,
      "Grade": 7
    },
    {
      "id": 983,
      "Internal": 35,
      "External": 38,
      "Total": 73,
      "Grade": 6
    },
    {
      "id": 984,
      "Internal": 32,
      "External": 58,
      "Total": 90,
      "Grade": 10
    },
    {
      "id": 985,
      "Internal": 34,
      "External": 48,
      "Total": 82,
      "Grade": 8
    },
    {
      "id": 986,
      "Internal": 27,
      "External": 54,
      "Total": 81,
      "Grade": 8
    },
    {
      "id": 987,
      "Internal": 26,
      "External": 52,
      "Total": 78,
      "Grade": 7
    },
    {
      "id": 988,
      "Internal": 23,
      "External": 46,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 989,
      "Internal": 37,
      "External": 51,
      "Total": 88,
      "Grade": 9
    },
    {
      "id": 990,
      "Internal": 25,
      "External": 35,
      "Total": 60,
      "Grade": 4
    },
    {
      "id": 991,
      "Internal": 30,
      "External": 37,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 992,
      "Internal": 31,
      "External": 36,
      "Total": 67,
      "Grade": 5
    },
    {
      "id": 993,
      "Internal": 34,
      "External": 35,
      "Total": 69,
      "Grade": 5
    },
    {
      "id": 994,
      "Internal": 37,
      "External": 43,
      "Total": 80,
      "Grade": 8
    },
    {
      "id": 995,
      "Internal": 33,
      "External": 51,
      "Total": 84,
      "Grade": 8
    },
    {
      "id": 996,
      "Internal": 23,
      "External": 32,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 997,
      "Internal": 21,
      "External": 34,
      "Total": 55,
      "Grade": 4
    },
    {
      "id": 998,
      "Internal": 29,
      "External": 42,
      "Total": 71,
      "Grade": 6
    },
    {
      "id": 999,
      "Internal": 24,
      "External": 57,
      "Total": 81,
      "Grade": 8
    }
  ];

  export default testData;